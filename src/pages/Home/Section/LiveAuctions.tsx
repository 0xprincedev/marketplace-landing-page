import { ReactComponent as HeartIcon } from 'icons/heart.svg'
import { ReactComponent as FireIcon } from 'icons/fire.svg'

export const NFT = () => {
	return (
		<div className="rounded-[20px] bg-bg-second p-5">
			<div className="relative aspect-square rounded-[20px] bg-gray-2 text-sm font-semibold">
				<div className="absolute top-3.5 right-3 flex items-center gap-1 rounded-full bg-background px-2.5 py-0.5">
					<HeartIcon />
					100
				</div>
				<div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-background py-1.5 px-3 leading-none">
					<FireIcon />
					05 : 12 : 07 : 45
				</div>
			</div>
			<div className="mt-5 flex items-center justify-between gap-4">
				<p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
					Lorem ipsum dolar sit amet aventure
				</p>
				<div className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold">BSC</div>
			</div>
			<div className="mt-4 flex gap-3">
				<div className="h-11 w-11 flex-shrink-0 rounded-2xl bg-gray-2"></div>
				<div className="flex flex-col justify-between overflow-hidden text-ellipsis whitespace-nowrap">
					<p className="text-xs text-gray">Creator</p>
					<p className="overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-semibold text-light-gray">
						SalvadorDali
					</p>
				</div>
				<div className="ml-auto flex flex-col justify-between text-right">
					<p className="text-xs text-gray">Current Bid</p>
					<p className="whitespace-nowrap text-lg font-semibold text-light-gray">
						4.89 ETH
					</p>
				</div>
			</div>
		</div>
	)
}

const LiveAuctions = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="flex items-center justify-between">
					<h4>Live Auctions</h4>
					<div className="cursor-pointer">
						<p className="text-sm font-bold uppercase tracking-[10%]">Explore more</p>
						<div className="h-px bg-gradient-to-r from-[#E250E5] to-[#4B50E6]"></div>
					</div>
				</div>
				<div className="scrollbar overflow-x-auto">
					<div className="mt-9 grid min-w-[1280px] grid-cols-4 gap-6">
						<NFT />
						<NFT />
						<NFT />
						<NFT />
					</div>
				</div>
			</div>
		</section>
	)
}

export default LiveAuctions
