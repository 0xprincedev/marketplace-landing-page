import { ReactComponent as CheckIcon } from 'icons/check.svg'
import { ReactComponent as HeartIcon } from 'icons/heart.svg'

export const Collection = () => {
	return (
		<div className="rounded-[10px] bg-bg-second p-5">
			<div className="flex">
				<div className="relative h-16 w-16 rounded-3xl bg-gray-2">
					<div className="absolute right-0 bottom-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary">
						<CheckIcon className="h-3 w-3" />
					</div>
				</div>
				<div className="ml-2.5 mt-2">
					<p className="text-xl font-bold">Creative Art Collection</p>
					<p className="mt-1 text-xs text-gray">
						Created by{' '}
						<span className="text-[15px] font-bold text-light-gray">Ralph Garraway</span>
					</p>
				</div>
				<div className="ml-auto flex h-fit items-center gap-1 rounded-full bg-background px-2.5 py-0.5">
					<HeartIcon />
					100
				</div>
			</div>
			<div className="mt-4">
				<div className="grid grid-cols-2 gap-2.5">
					<div className="rounded-xl bg-gray-2" />
					<div className="grid grid-cols-2 gap-2.5">
						<div className="aspect-square rounded-xl bg-gray-2" />
						<div className="aspect-square rounded-xl bg-gray-2" />
						<div className="col-span-2 aspect-square rounded-xl bg-gray-2" />
					</div>
				</div>
			</div>
		</div>
	)
}

const PopularCollection = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="flex items-center justify-between">
					<h4 className="text-4xl font-bold">Popular Collection</h4>
					<div className="cursor-pointer">
						<p className="text-sm font-bold uppercase tracking-[10%]">Explore more</p>
						<div className="h-px bg-gradient-to-r from-[#E250E5] to-[#4B50E6]"></div>
					</div>
				</div>
				<div className="mt-10 grid grid-cols-3 gap-6">
					<Collection />
					<Collection />
					<Collection />
				</div>
			</div>
		</section>
	)
}

export default PopularCollection
