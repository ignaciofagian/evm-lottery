/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
  Stack,
  Text,
  VStack,
  Alert,
  AlertIcon,
  useToast,
  useBoolean,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LotteryContext, Stats } from '../../contexts/LotteryContext';
import { useAccount, useBalance, useContractWrite } from 'wagmi';
import lotteryAbi from './../../abi/lottery';
import { ethers, formatEther } from 'ethers';
import { waitForTransaction } from 'wagmi/actions';
import { estimateGas } from '../../helpers/price';

export default function LotteryForm() {
  const toast = useToast();
  const { isConnected, address: myAddress } = useAccount();
  const { data: myBnbBalance } = useBalance({ address: myAddress, watch: true });
  const { stats, getMyTickets } = useContext(LotteryContext);
  const [loadingBuy, setLoadingBuy] = useBoolean(false);
  const [loadingCancel, setLoadingCancel] = useBoolean(false);

  const buyTickets = useContractWrite({
    address: import.meta.env.VITE_LOTTERY_ADDRESS,
    abi: lotteryAbi.abi,
    functionName: 'buyTickets',
  });

  const cancelTickets = useContractWrite({
    address: import.meta.env.VITE_LOTTERY_ADDRESS,
    abi: lotteryAbi.abi,
    functionName: 'cancelTickets',
  });

  const handleBuyTickets = async () => {
    const { myBuys } = getMyTickets();
    const areTheLastTickets = isLastTicketBuy(stats);
    const buyAmount = ethers.parseEther(`${import.meta.env.VITE_LOTTERY_PRICE * myBuys.length}`);
    const buysInBigInt: bigint[] = myBuys.map((e: string) => BigInt(e) as bigint);
    setLoadingBuy.on();

    try {
      const tx = await buyTickets.writeAsync({
        args: [buysInBigInt],
        value: buyAmount,
        gasPrice: ethers.parseUnits(import.meta.env.VITE_LOTTERY_GASPRICE, 'gwei'),
        gas: estimateGas(myBuys.length, areTheLastTickets),
      });

      await waitForTransaction({ hash: tx.hash });

      toast({
        description: 'Tickets buy success',
        status: 'success',
      });
    } catch (ex) {
      console.log(ex);
      toast({
        description: `Tickets buy failed`,
        status: 'error',
      });
    } finally {
      setLoadingBuy.off();
    }
  };

  const handleCancelTickets = async () => {
    try {
      const { myCancelleds } = getMyTickets();
      const cancelledsInBigInt: bigint[] = myCancelleds.map((e: string) => BigInt(e) as bigint);
      setLoadingCancel.on();
      const tx = await cancelTickets.writeAsync({
        args: [cancelledsInBigInt],
        gasPrice: ethers.parseUnits('4', 'gwei'),
        gas: BigInt(300000),
      });

      await waitForTransaction({ hash: tx.hash });

      toast({
        description: 'Tickets cancel success',
        status: 'success',
      });
    } catch (ex) {
      toast({
        description: `Tickets cancel failed`,
        status: 'error',
      });
    } finally {
      setLoadingCancel.off();
    }
  };
  const totalAmount = getMyTickets().myBuys.length * import.meta.env.VITE_LOTTERY_PRICE;
  const hasBalance = myBnbBalance ? parseFloat(formatEther(myBnbBalance.value)) > totalAmount : null;

  return (
    <Card w={{ md: 300, sm: 'auto' }}>
      <CardHeader>
        <Heading size="md">
          <FormattedMessage id="lottery.form.heading" />
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing={5} h="100%">
          <Text fontSize="15px" textAlign={'center'}>
            <FormattedMessage id="lottery.form.totals" />
          </Text>
          <Text textAlign="center" fontSize="30px">
            {totalAmount?.toFixed(3)} BNB
          </Text>
          {hasBalance === false && (
            <Alert status="warning" textAlign="center" size="xs" py={2} rounded={4}>
              No balance
            </Alert>
          )}
          {isConnected ? (
            <VStack spacing={5} marginTop="auto">
              <Button
                width={{ base: '100%', sm: '100%' }}
                colorScheme="blue"
                isLoading={loadingCancel}
                isDisabled={stats.totalMyCancelled === 0}
                onClick={handleCancelTickets}
              >
                <FormattedMessage id="lottery.button.withdraw" /> ({stats.totalMyCancelled})
              </Button>
              <Button
                width={{ base: '100%', sm: '100%' }}
                colorScheme="blue"
                onClick={handleBuyTickets}
                isDisabled={stats.totalMyCurrentBuys === 0 || hasBalance === false}
                isLoading={loadingBuy}
              >
                <FormattedMessage id="lottery.button.buy" /> ({stats.totalMyCurrentBuys})
              </Button>
            </VStack>
          ) : (
            <Alert borderRadius={4} status="info" marginTop="auto">
              <AlertIcon />
              <FormattedMessage id="lottery.form.connect" />
            </Alert>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
function isLastTicketBuy(stats: Stats) {
  const totalDistributed = stats.totalSold + stats.totalMyCurrentBuys + stats.totalMyBuys;
  return Number(import.meta.env.VITE_LOTTERY_MAX_TICKETS) === totalDistributed;
}
