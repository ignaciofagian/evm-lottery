import { SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LotteryContext } from '../../contexts/LotteryContext';

export default function LotteryStats() {
  const { stats } = useContext(LotteryContext);

  const availableTickets = import.meta.env.VITE_LOTTERY_MAX_TICKETS - (stats?.totalSold + stats?.totalMyBuys);
  const probabilities = ((stats?.totalMyBuys + stats?.totalMyCurrentBuys) / import.meta.env.VITE_LOTTERY_MAX_TICKETS) * 100;
  
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mb={6}>
      <StatsCard
        title={<FormattedMessage id="lottery.stats.available" />}
        stat={`${availableTickets} Ticket(s)`}
      />
      <StatsCard title={<FormattedMessage id="lottery.stats.sells" />} stat={`${stats?.totalSold + stats?.totalMyBuys} tickets`} />
      <StatsCard title={<FormattedMessage id="lottery.stats.prob" />} stat={`${probabilities.toFixed(0)}%`} />
    </SimpleGrid>
  );
}

interface StatsCardProps {
  title: string | React.ReactNode;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 5 }}
      py={3}
      shadow={'xs'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.100', 'gray.200')}
      rounded={'md'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}
