/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { LotteryContext, TicketStatus } from '../../contexts/LotteryContext';
import { useAccount } from 'wagmi';

export default function LotteryBoard() {
  const { isConnected } = useAccount();
  const { tickets, onChangeTicket } = useContext(LotteryContext);

  return (
    <Grid
      gap={'15px'}
      gridAutoRows="minmax(48px, 1fr)"
      gridTemplateColumns={'repeat(auto-fit, minmax(48px, 2fr))'}
    >
      {Object.entries(tickets).map(([ticket, status]: [string, TicketStatus]) => (
        <TicketButton
          key={`cell-${ticket}`}
          id={ticket}
          label={ticket}
          status={status}
          disabled={isConnected === false}
          onClick={onChangeTicket}
        />
      ))}
    </Grid>
  );
}

interface TicketButtonProps {
  id: string;
  label: string;
  status: TicketStatus;
  disabled: boolean;
  onClick: (id: string, nextState: TicketStatus) => void;
}

function TicketButton({ id, label, status, disabled, onClick }: TicketButtonProps) {
  const getColor = () => {
    if (status === 'Available') return 'green';
    else if (status === 'Sold') return 'gray';
    else if (status === 'PreviousBuy') return 'orange';
    else if (status === 'Cancelled') return 'yellow';
    else return 'blue';
  };

  const getNextStatus = (): TicketStatus => {
    if (status === 'Available') return 'CurrentBuy';
    else if (status === 'PreviousBuy') return 'Cancelled';
    else if (status === 'Cancelled') return 'PreviousBuy';
    else if (status === 'CurrentBuy') return 'Available';
    return 'Sold';
  };

  return (
    <Button
      width="50px"
      isDisabled={disabled || status === 'Sold'}
      colorScheme={getColor()}
      boxShadow={status === 'CurrentBuy' ? '2xl' : 0}
      onClick={() => onClick(id, getNextStatus())}
      p={1}
    >
      <Box width="50px">{label}</Box>
    </Button>
  );
}
