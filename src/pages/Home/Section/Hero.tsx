import { ReactComponent as RocketIcon } from 'icons/rocket.svg'
import { ReactComponent as NoteIcon } from 'icons/note.svg'

const Hero = () => {
	return (
		<section className="relative flex h-[calc(100vh-80px)] items-center">
			<img
				src="/images/background.png"
				alt=""
				className="absolute top-0 left-0 h-[calc(100vh-80px)] w-screen object-cover"
			/>
			<div className="container relative z-10">
				<div className="text-[56px] font-bold leading-tight">
					<p>Discover, find,</p>
					<p className="gradient-text text-background">Sell extraordinary</p>
					<p>Monster NFTs</p>
					<p className="mt-6 text-xl font-normal text-light-gray">
						Marketplace for monster character cllections non fungible token NFTs
					</p>
				</div>
				<div className="mt-10 flex items-center gap-4">
					<button className="group flex items-center gap-0.5 rounded-full border border-primary py-4 px-9 text-[15px] font-bold">
						<RocketIcon className="group-hover:animate-spin" />
						Explore
					</button>
					<button className="group flex items-center gap-2 rounded-full bg-white py-4 px-9 text-[15px] font-bold text-bg-second">
						<NoteIcon className="group-hover:animate-pulse" />
						Explore
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
