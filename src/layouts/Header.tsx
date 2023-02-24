import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAccount, useDisconnect } from 'wagmi'

import { header } from 'config'
import WalletConnectModal from 'components/modal/WalletConnect'
import { shortenAddress } from 'utils'
import { ReactComponent as Logo } from 'icons/logo.svg'
import { ReactComponent as WalletIcon } from 'icons/wallet.svg'

const Header = () => {
	const [open, setOpen] = useState<boolean>(false)
	const { address, isConnected } = useAccount()
	const { disconnect } = useDisconnect()

	const handleClick = () => {
		if (isConnected) {
			return disconnect()
		}
		setOpen(true)
	}

	return (
		<header className="border-b border-gray border-opacity-40">
			<WalletConnectModal open={open} closeModal={() => setOpen(false)} />
			<div className="container">
				<div className="flex h-20 items-center">
					<div className="flex items-center gap-2.5 text-4xl font-bold sm:text-2xl">
						<Logo />
						Linda
					</div>
					<nav className="ml-auto flex items-center gap-10 text-lg font-bold lg:hidden">
						{header.map((item) => (
							<Link to={item.to} className="hover:opacity-80" key={item.label}>
								{item.label}
							</Link>
						))}
					</nav>
					<button
						className="ml-40 flex items-center gap-2 rounded-full border border-primary py-3 px-9 text-[15px] font-bold lg:ml-auto sm:ml-auto sm:px-6"
						onClick={handleClick}
					>
						<WalletIcon />
						{!isConnected ? 'Connect Wallet' : shortenAddress(address)}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
