import { ReactComponent as CheckIcon } from 'icons/check.svg'

export const Seller = () => {
	return (
		<div className="w-[120px]">
			<div className="relative h-[120px] w-[120px] rounded-[40px] bg-gray-2">
				<div className="absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
					<CheckIcon />
				</div>
			</div>
			<div className="mt-4 items-center">
				<p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold">
					Samson Frost Samson
				</p>
				<p className="text-center text-[15px] font-bold">214.2 ETH</p>
			</div>
		</div>
	)
}

const TopSeller = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div>
					<h4>Top Seller</h4>
				</div>
				<div className="scrollbar overflow-x-auto">
					<div className="mt-9 flex min-w-[1280px] gap-10">
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
					</div>
				</div>
			</div>
		</section>
	)
}

export default TopSeller
