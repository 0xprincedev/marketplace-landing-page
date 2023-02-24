import { useEffect } from 'react'
import Modal from 'react-modal'
import { useAccount, useConnect } from 'wagmi'

import { ReactComponent as MetamaskIcon } from 'icons/metamask.svg'
import { ReactComponent as CoinbaseIcon } from 'icons/coinbase.svg'
import { ReactComponent as WalletConnectIcon } from 'icons/walletconnect.svg'

interface Props {
	open: boolean
	closeModal: () => void
}

const icons = [
	<MetamaskIcon className="h-8 w-8" key={0} />,
	<CoinbaseIcon className="h-8 w-8" key={1} />,
	<WalletConnectIcon className="h-8 w-8" key={2} />,
]

const WalletConnectModal = (props: Props) => {
	const { open, closeModal } = props
	const { address } = useAccount()
	const { connect, connectors, isLoading, pendingConnector } = useConnect()

	useEffect(() => {
		if (address) {
			closeModal()
		}
	}, [address]) //eslint-disable-line

	return (
		<Modal isOpen={open} onRequestClose={closeModal}>
			<div className="max-w-md">
				<div className="absolute top-2 right-2" onClick={closeModal}></div>
				<h1 className="title">Connect to wallet</h1>
				<div className="mt-4 grid gap-4">
					{connectors.map((connector: any, index: number) => (
						<button
							disabled={!connector.ready}
							key={connector.id}
							onClick={() => connect({ connector })}
							className="!flex !items-center !justify-start gap-2 !py-2 !px-3 !text-lg"
						>
							{icons[index]}
							{connector.name}
							{!connector.ready && ' (unsupported)'}
							{isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
						</button>
					))}
				</div>
			</div>
		</Modal>
	)
}

export default WalletConnectModal
