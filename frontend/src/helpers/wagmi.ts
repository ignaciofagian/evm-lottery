import { createConfig } from 'wagmi';
import { connectors, publicClient, webSocketPublicClient } from './connectors';

export const client = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})