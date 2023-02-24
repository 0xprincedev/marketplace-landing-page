import { ReactComponent as HeartIcon } from 'icons/heart.svg'
import { ReactComponent as BagIcon } from 'icons/bag.svg'
import { ReactComponent as RedoIcon } from 'icons/redo.svg'

interface NFTProps {
	comingSoon?: boolean
}

export const NFT = ({ comingSoon = false }: NFTProps) => {
	return (
		<div className="h-fit rounded-[20px] bg-bg-second p-5">
			<div className="relative aspect-square rounded-[20px] bg-gray-2 text-sm font-semibold">
				{comingSoon && (
					<div className="absolute top-3.5 left-3 flex items-center gap-1 rounded-full bg-yellow px-5 py-0.5 font-bold text-bg-second">
						Coming Soon
					</div>
				)}
				<div className="absolute top-3.5 right-3 flex items-center gap-1 rounded-full bg-background px-2.5 py-0.5">
					<HeartIcon />
					100
				</div>
			</div>
			<div className="mt-5 flex items-center justify-between gap-4">
				<p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
					Lorem ipsum dolar sit amet aventure
				</p>
				<div className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold">BSC</div>
			</div>
			<div className="mt-4 flex">
				<div className="h-11 w-11 rounded-2xl bg-gray-2"></div>
				<div className="ml-3 flex flex-col justify-between">
					<p className="text-xs text-gray">Creator</p>
					<p className="text-[15px] font-semibold text-light-gray">SalvadorDali</p>
				</div>
				<div className="ml-auto flex flex-col justify-between text-right">
					<p className="text-xs text-gray">Current Bid</p>
					<p className="text-lg font-semibold text-light-gray">4.89 ETH</p>
				</div>
			</div>
			{!comingSoon && (
				<div className="mt-5 flex items-center justify-between">
					<button className="flex items-center gap-1.5 rounded-full border border-primary px-7 py-3 text-sm font-semibold tracking-wide">
						<BagIcon />
						Place Bid
					</button>
					<div className="flex cursor-pointer items-center gap-2 font-bold text-gray">
						<RedoIcon />
						View History
					</div>
				</div>
			)}
		</div>
	)
}

const TodayPicks = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="flex items-center justify-between">
					<h4>Today's Picks</h4>
					<div className="cursor-pointer">
						<p className="text-sm font-bold uppercase tracking-[10%]">Explore more</p>
						<div className="h-px bg-gradient-to-r from-[#E250E5] to-[#4B50E6]"></div>
					</div>
				</div>
				<div className="mt-9 grid grid-cols-4 gap-x-6 gap-y-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					<NFT />
					<NFT comingSoon />
					<NFT />
					<NFT />
					<NFT />
					<NFT />
					<NFT />
					<NFT />
				</div>
				<div className="mt-10 flex">
					<button className="mx-auto rounded-full border border-white px-10 py-4">
						Load More
					</button>
				</div>
			</div>
		</section>
	)
}

export default TodayPicks
