import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {  bsc} from 'wagmi/chains';

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [publicProvider()],
);

export const connectors = [
  new MetaMaskConnector({ chains, options: { shimDisconnect: true } }),
  new WalletConnectConnector({
    
    chains,
    options: {
      projectId: '788b3843fd8848ed7eb09e7502cb3e6a',
    },
  }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'wagmi',
    },
  }),
];
