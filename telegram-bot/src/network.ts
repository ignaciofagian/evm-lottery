import {providers, Contract, utils} from 'ethers';
import LotteryABI from './ABI/Lottery.json';
import path from 'path';
import fs from 'fs';
import {areEquals, log, sleep} from './utils';

class Network {
  providerIdx: number = 0;
  providerUrls: string[];
  provider: providers.Provider;
  lottery: Contract;
  lastProcessed = {
    id: 1,
    lastBuyNumbers: [],
  };

  constructor() {
    this.providerIdx = 0;
    this.providerUrls = process.env.RPC_URLS.split(',').map((e) => e.trim());
    this.load();
  }

  async connect() {
    try {
      this.provider = new providers.JsonRpcProvider(this.providerUrls[this.providerIdx]);
      this.lottery = new Contract(process.env.ADDRESS, LotteryABI.abi, this.provider);

      await this.provider.getBlockNumber();

      return true;
    } catch (ex) {
      await sleep(2500);
      log.error(`Connect [${this.providerUrls[this.providerIdx]}] ${ex.toString()}`);
      this.providerIdx = (this.providerIdx + 1) % this.providerUrls.length;
      return false;
    }
  }

  load() {
    const data = fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8');
    this.lastProcessed = JSON.parse(data);
  }

  async checkLotteryChanges(): Promise<LotteryChange[]> {
    const changes: LotteryChange[] = [];
    try {
      const currentId = await this.getCurrentId();
      const lastBuyNumbers = await this.getLastBuyNumbers();
      const lotteryInfo = await this.getLotteryInfo(this.lastProcessed.id);

      if (this.lastProcessed.id === currentId) {
        if (areEquals(lastBuyNumbers, this.lastProcessed.lastBuyNumbers) === false) {
          // new winners
          const change: LotteryChange = {
            id: lotteryInfo.id,
            type: 'NEW_BUYS',
            newTickets: lastBuyNumbers,
            raw: lotteryInfo,
          };
          changes.push(change);
        }
      }

      if (this.lastProcessed.id !== currentId) {
        // new winners
        const change: LotteryChange = {
          id: lotteryInfo.id,
          type: 'NEW_WINNERS',
          winners: lotteryInfo.winners,
          raw: lotteryInfo,
        };
        changes.push(change);

        // new winners
        const change2: LotteryChange = {
          id: this.lastProcessed.id + 1,
          type: 'START_NEW_LOTTERY',
          raw: lotteryInfo,
        };
        changes.push(change2);
      }

      return changes;
    } catch (ex) {
      await this.checkConnection();
    }
    return changes;
  }

  private async getCurrentId() {
    const value = await this.lottery.lotteryId();
    return Number(value);
  }

  private async getLotteryInfo(id?: number): Promise<LotteryChain> {
    const values = await this.lottery.getLottery(id);
    return this.parseLotteryChain(values);
  }

  private async getLastBuyNumbers() {
    const values = await this.lottery.getLastBuyTickets();
    return values.map(Number);
  }

  public async getLastWinners(): Promise<LotteryChange> {
    const values = await this.lottery.getLottery(this.lastProcessed.id - 1);
    const info: LotteryChain = this.parseLotteryChain(values);

    return {
      type: 'NEW_WINNERS',
      winners: info.winners,
      raw: info,
    };
  }

  private async checkConnection() {
    try {
      await this.provider.getBlockNumber();
      return true;
    } catch (ex) {
      return this.connect();
    }
  }

  public async getDebugInfo() {
    const runningRPC = this.providerUrls[this.providerIdx];
    const isConnected = await this.checkConnection();
    const lastProcessed = this.lastProcessed;
    return {
      currentRPC: runningRPC,
      isConnected: isConnected,
      lastProcessed: JSON.stringify(lastProcessed),
    };
  }

  private parseLotteryChain(data: any): LotteryChain {
    const id = Number(data[0]);
    const createdAt: Date = new Date(Number(data[1]) * 1000);
    const endedAt: Date | false = data[2] !== 0n ? new Date(Number(data[2]) * 1000) : false;
    const winnerAddresses: string[] = data[4];
    const winnerNumbers: number[] = data[5];
    const winners: LotteryChainWinner[] = [];
    winnerAddresses.forEach((address: string, idx: number) => {
      winners.push({
        address: address,
        slot: Number(winnerNumbers[idx]),
      });
    });

    return {
      id,
      createdAt,
      endedAt,
      isEnded: endedAt !== false,
      winners,
    };
  }

  public confirmChanges(change: LotteryChange) {
    if (change.type !== 'NONE') {
      if (change.type === 'NEW_BUYS') {
        this.lastProcessed.lastBuyNumbers = change.newTickets;
      } else if (change.type === 'START_NEW_LOTTERY') {
        this.lastProcessed.lastBuyNumbers = [];
        this.lastProcessed.id = change.id;
      }
    }

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(this.lastProcessed));
  }
}

export default new Network();
