/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text, Wrap, useColorModeValue } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

export default function LotteryLegend() {
  return (
    <Wrap mb={'30px'} mt={'10px'} justifyContent={'end'}  spacing={{ base: 5, lg: 8 }}>
      <LegendBox text={<FormattedMessage id="lottery.legend.available" />} color="green" />
      <LegendBox text={<FormattedMessage id="lottery.legend.sold" />} color="gray" />
      <LegendBox text={<FormattedMessage id="lottery.legend.alreadyBought" />} color="orange" />
      <LegendBox text={<FormattedMessage id="lottery.legend.myCurrentBuys" />} color="blue" />
      <LegendBox text={<FormattedMessage id="lottery.legend.cancelled" />} color="yellow" />
    </Wrap>
  );
}

function LegendBox({ text, color }: any) {
  return (
    <Flex gap={'6px'} alignItems={'center'}>
      <Box w={'20px'} height={'20px'} bg={useColorModeValue(`${color}.500`, `${color}.200`)} rounded={'3px'} />
      <Text>{text}</Text>
    </Flex>
  );
}
