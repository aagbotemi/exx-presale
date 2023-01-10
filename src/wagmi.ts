import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { mainnet, bscTestnet, bsc } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider, webSocketProvider } = configureChains(
  import.meta?.env?.MODE === 'development' ? [bsc] : [bscTestnet],
  // [
  //   publicProvider(),
  // ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      }),
    }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'EXX Network',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
