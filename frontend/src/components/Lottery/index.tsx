import { Stack, Box } from '@chakra-ui/react';
import LotteryForm from './LotteryForm';
import LotteryBoard from './LotteryBoard';
import LotteryStats from './LotteryStats';
import LotterySkeleton from './LotterySkeleton';
import { useContext } from 'react';
import { LotteryContext } from '../../contexts/LotteryContext';
import LotteryLegend from './LotteryLegend';

export default function Lottery() {
  const { isLoading } = useContext(LotteryContext);
  return (
    <Stack direction={{ base: 'column', lg: 'row' }} spacing={8}>
      <LotteryForm />
      <Box flexGrow={1}>
        <LotteryStats />
        <LotteryLegend />
        {isLoading ? <LotterySkeleton /> : <LotteryBoard />}
      </Box>
    </Stack>
  );
}
