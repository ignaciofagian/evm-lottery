type LotteryChangeType = 'NONE' | 'NEW_WINNERS' | 'START_NEW_LOTTERY' | 'NEW_BUYS';

interface LotteryChange {
  id?: number;
  type: LotteryChangeType;
  winners?: LotteryChainWinner[];
  newTickets?: number[];
  raw: any;
}

interface LotteryChainWinner {
	slot: number;
	address: string;
}

interface LotteryChain {
  id: number;
	createdAt: Date;
	endedAt: Date | false;
	isEnded: boolean;
	winners: LotteryChainWinner[];
}