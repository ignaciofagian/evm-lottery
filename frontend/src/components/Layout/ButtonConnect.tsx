/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { formatEther } from 'ethers';
import { FormattedMessage } from 'react-intl';
import { Connector, useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import WalletSelector from '../WalletSelector';
import { useState } from 'react';
import { shortenAccount } from '../../helpers/textUtils';

export default function ButtonConnect() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [walletSelector, setWalletSelector] = useState({ isOpen: false });
  const { disconnect, isLoading: isDisconnecting } = useDisconnect();
  const { address: userAddress, isConnected: isUserConnected } = useAccount();
  const { data } = useBalance({ address: userAddress, watch: true });
  const { connect, isLoading: isConnecting } = useConnect({
    onError(error: any) {
      console.log({
        action: 'LOGIN_ERROR',
        label: error.message,
        value: 0,
        category: 'login_status',
      });
    },
  });

  const isLoading = isDisconnecting || isConnecting;

  const handleOnClickConnect = () => {
    if (isLoading) return;
    if (isUserConnected === false) {
      setWalletSelector({ isOpen: true });
    }
  };

  const handleOnClickDisconnect = async () => {
    disconnect();
  };

  const handleOnCloseWalletSector = () => setWalletSelector({ isOpen: false });

  const handleOnConnect = (connector: Connector) => {
    connect({ connector, chainId: 56 });
  };

  const bgColor = useColorModeValue('gray.200', 'whiteAlpha.200');

  if (userAddress) {
    return (
      <Button w={{ base: 'auto', xs: '80px' }} onClick={handleOnClickDisconnect} bg={bgColor}>
        <Flex direction={'column'} py={1}>
          <Text mb={0} fontSize="xs" fontWeight="medium">
            {data && parseFloat(formatEther(data?.value)).toFixed(3)} BNB
          </Text>
          <Text mt={1} fontSize="xs" mr="2">
            {userAddress.slice(0, 6)}...{userAddress.slice(userAddress.length - 4, userAddress.length)}
          </Text>
        </Flex>
      </Button>
    );
  }

  return [
    <Button w={{ base: 'auto', xs: '80px' }} onClick={handleOnClickConnect}>
      {userAddress ? (
        `${shortenAccount(userAddress)}`
      ) : (
        <FormattedMessage id={isLargerThan600 ? 'navbar.button.connect' : 'navbar.button.connect-sm'} />
      )}
    </Button>,
    <WalletSelector
      isOpen={walletSelector.isOpen}
      onClose={handleOnCloseWalletSector}
      onConnect={handleOnConnect}
    />,
  ];
}
