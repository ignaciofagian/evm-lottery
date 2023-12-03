/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import lotteryAbi from './../abi/lottery';
import { ZeroAddress } from 'ethers';
import { sameAddress } from '../helpers/address';

const initialStats = { totalMyBuys: 0, totalMyCurrentBuys: 0, totalMyCancelled: 0, totalSold: 0 };

const initialState = {
  tickets: {},
  stats: initialStats,
  isLoading: true,
  onChangeTicket: () => null,
  getMyTickets: () => ({ myBuys: [], myCancelleds: [] }),
};

interface LotteryContextValue {
  stats: Stats;
  tickets: TicketCells;
  isLoading: boolean;
  onChangeTicket: (id: string, nextState: TicketStatus) => void;
  getMyTickets: () => { myBuys: string[]; myCancelleds: string[] };
}

const LotteryContext = createContext<LotteryContextValue>(initialState);

export type TicketStatus = 'Available' | 'Sold' | 'PreviousBuy' | 'CurrentBuy' | 'Cancelled';
type TicketCells = { [place: string]: TicketStatus };

export interface Stats {
  totalMyBuys: number;
  totalMyCurrentBuys: number;
  totalMyCancelled: number;
  totalSold: number;
}

function LotteryProvider({ children }: any) {
  const { address } = useAccount();
  const [lotteryId, setLotteryId] = useState<number | false>(false);
  const [tickets, setTickets] = useState<TicketCells>({});
  const [stats, setStats] = useState<Stats>(initialStats);
  const [isLoading, setIsLoading]= useState<boolean>(true);

  const { data } = useContractRead({
    address: import.meta.env.VITE_LOTTERY_ADDRESS,
    abi: lotteryAbi.abi,
    functionName: 'getActiveLottery',
    watch : true
  } as any);

  useEffect(() => {
    handleReset();
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      const dataLotteryId = Number((data as any)[0]);
      if (dataLotteryId !== lotteryId) {
        handleReset();
        setLotteryId(lotteryId);
      }
      const ticketAddresses = (data as any[])[3];
      setTickets((prevTickets: TicketCells) => {
        const nextTickets = Object.assign({}, prevTickets);
        ticketAddresses.forEach((ticketAddr: `0x${string}` | undefined, idx: number) => {
          const contractStatus = sameAddress(ticketAddr, ZeroAddress as `0x${string}`) ? 'Available' : 'Sold';
          const isMyAddress = sameAddress(ticketAddr, address);
          if (nextTickets[idx] !== contractStatus) {
            if (contractStatus == 'Sold' && isMyAddress) nextTickets[idx] = 'PreviousBuy';
            else if (contractStatus == 'Sold') nextTickets[idx] = 'Sold';
            else if (nextTickets[idx] === 'Sold') nextTickets[idx] = 'Available';
          }
        });
        return nextTickets;
      });
    }
  }, [data]);

  useEffect(() => {
    if (tickets === undefined) return;
    let totalMyBuys: number = 0;
    let totalMyCurrentBuys: number = 0;
    let totalMyCancelled: number = 0;
    let totalSold: number = 0;
    Object.entries(tickets).forEach(([, status]: [string, TicketStatus]) => {
      if (status === 'CurrentBuy') totalMyCurrentBuys++;
      else if (status === 'PreviousBuy') totalMyBuys++;
      else if (status === 'Cancelled') totalMyCancelled++;
      else if (status === 'Sold') totalSold++;
    });
    setStats((prevStats: Stats) => ({ ...prevStats, totalMyBuys, totalMyCurrentBuys, totalMyCancelled, totalSold }));
    setTimeout(() => setIsLoading(false), 1000);
  }, [tickets]);

  const handleReset = () => {
    const cells: TicketCells = {};
    for (let i = 0; i < import.meta.env.VITE_LOTTERY_MAX_TICKETS; i++) {
      cells[i] = 'Available';
    }
    setTickets(cells);
  }

  const handleOnChangeTicket = (id: string, nextState: TicketStatus) => {
    if (tickets[id] !== 'Sold') {
      setTickets({ ...tickets, [id]: nextState });
    }
  };

  const handleGetMyTickets = () => {
    const myBuys: string[] = [];
    const myCancelleds: string[] = [];
    Object.entries(tickets).forEach(([ticket, status]: [string, TicketStatus]) => {
      if (status === 'CurrentBuy') myBuys.push(ticket);
      else if (status === 'Cancelled') myCancelleds.push(ticket);
    });
    return { myBuys, myCancelleds };
  };

  const value = {
    tickets: tickets,
    stats: stats,
    isLoading,
    getMyTickets: handleGetMyTickets,
    onChangeTicket: handleOnChangeTicket,
  };

  return <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>;
}

export { LotteryContext, LotteryProvider };
