import { ReactComponent as WalletIcon } from 'icons/wallet.svg'

export const Item = () => {
	return (
		<div>
			<div className="flex h-16 w-16 items-center justify-center rounded-[16px] bg-primary">
				<WalletIcon className="h-6 w-6" />
			</div>
			<h5 className="mt-7 text-2xl font-bold">Set Up Your Wallet</h5>
			<p className="mt-2.5 text-sm">
				Wallet that is functional for NFT purchasing. You may have a Coinbase account at
				this point, but very few are actually set up to buy an NFT.
			</p>
		</div>
	)
}

const CreateAndSellYourNFTs = () => {
	return (
		<section className="pt-10 pb-20">
			<div className="container">
				<div className="flex items-center justify-between">
					<h4>Create And Sell Your NFTs</h4>
				</div>
				<div className="mt-10 grid grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</section>
	)
}

export default CreateAndSellYourNFTs
