import { Button, Spinner, Flex, Image, Text } from '@chakra-ui/react';
import ImgMetamask from './../../assets/metamask.png';
import ImgCoinBase from './../../assets/coinbase.png';
import ImgWC from './../../assets/wc.png';
import { Connector, useAccount } from 'wagmi';

interface WalletProviderButtonProps {
	isActive: boolean;
	onConnect: (connector: Connector) => void;
	connector: Connector;
}

function getConnectorImage(name: string) {
	if (name === 'MetaMask') return ImgMetamask;
	else if (name === 'WalletConnect') return ImgWC;
	else return ImgCoinBase;
}

export default function WalletButton({ isActive, connector, onConnect }: WalletProviderButtonProps) {
	const { isConnecting } = useAccount();
	const handleOnClick = () => {
		onConnect(connector);
	};

	return (
		<Button onClick={handleOnClick} py={8} px={10} justifyContent="flex-start">
			<Flex alignItems="center" gap={6} >
				{isConnecting && isActive ? (
					<Spinner />
				) : (
					<Image src={getConnectorImage(connector.name)} alt={connector.name} w="36px" h="36px" />
				)}

				<Text fontSize={18}>{connector.name}</Text>
			</Flex>
		</Button>
	);
}
