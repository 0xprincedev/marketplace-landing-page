import { ToastContainer } from 'react-toastify'
import { createClient, configureChains, mainnet, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
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
		connectors: [new MetaMaskConnector({ chains })],
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
