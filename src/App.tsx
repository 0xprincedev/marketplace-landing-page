import { ToastContainer } from 'react-toastify'
import { createClient, configureChains, mainnet, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import 'react-toastify/dist/ReactToastify.css'

import Home from 'pages/Home'

const App = () => {
	const { chains, provider, webSocketProvider } = configureChains(
		[mainnet],
		[alchemyProvider({ apiKey: '4HRqAsTkhjwIUCNouUQDzA88JprJAzkQ' }), publicProvider()]
	)

	// Set up client
	const client = createClient({
		autoConnect: true,
		connectors: [
			new MetaMaskConnector({ chains }),
			// new CoinbaseWalletConnector({
			// 	chains,
			// 	options: {
			// 		appName: 'wagmi',
			// 	},
			// }),
			// new WalletConnectConnector({
			// 	chains,
			// 	options: {
			// 		qrcode: true,
			// 	},
			// }),
			// new InjectedConnector({
			// 	chains,
			// 	options: {
			// 		name: 'Injected',
			// 		shimDisconnect: true,
			// 	},
			// }),
		],
		provider,
		webSocketProvider,
	})
	return (
		<WagmiConfig client={client}>
			<Home />
			<ToastContainer autoClose={2000} closeOnClick pauseOnHover={false} theme="dark" />
		</WagmiConfig>
	)
}

export default App
