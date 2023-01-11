import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, client } from './wagmi'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <App />
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
