import { ReactComponent as FacebookIcon } from 'icons/facebook.svg'
import { ReactComponent as TwitterIcon } from 'icons/twitter.svg'
import { ReactComponent as GoogleIcon } from 'icons/google.svg'
import { ReactComponent as TwitchIcon } from 'icons/twitch.svg'
import { ReactComponent as SendIcon } from 'icons/send.svg'

const Footer = () => {
	return (
		<footer className="bg-[#0D0D11] py-20">
			<div className="container">
				<div className="flex justify-between">
					<div className="max-w-[240px]">
						<div className="flex items-center gap-3 text-4xl font-bold">
							<img src="/images/logo.png" alt="" className="h-10" />
							Axies
						</div>
						<p className="mt-3 text-sm">
							Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit
							totam vel laboriosam vitae.
						</p>
						<div className="mt-7 flex gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-second">
								<FacebookIcon />
							</div>
							<div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-second">
								<TwitterIcon />
							</div>
							<div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-second">
								<GoogleIcon />
							</div>
							<div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-second">
								<TwitchIcon />
							</div>
						</div>
					</div>
					<div className="flex gap-24">
						<div className="flex flex-col gap-6">
							<p className="text-lg font-bold">My Account</p>
							<ul className="flex flex-col gap-4 text-sm">
								<li>Authors</li>
								<li>Collection</li>
								<li>Author Profile</li>
								<li>Create Collection</li>
							</ul>
						</div>
						<div className="flex flex-col gap-6">
							<p className="text-lg font-bold">Resources</p>
							<ul className="flex flex-col gap-4 text-sm">
								<li>Help & Support</li>
								<li>Live Auctions</li>
								<li>Item Details</li>
								<li>Activity</li>
							</ul>
						</div>
						<div className="flex flex-col gap-6">
							<p className="text-lg font-bold">Company</p>
							<ul className="flex flex-col gap-4 text-sm">
								<li>About Us</li>
								<li>Contact Us</li>
								<li>Our Blog</li>
								<li>Discover</li>
							</ul>
						</div>
						<div className="flex flex-col gap-6">
							<p className="text-lg font-bold">Subscribe Us</p>
							<label className="flex overflow-hidden rounded-xl border border-bg-second">
								<input
									type="text"
									className="bg-transparent px-6"
									placeholder="info@yourgmail.com"
								/>
								<div className="flex h-14 w-[60px] cursor-pointer items-center justify-center bg-primary">
									<SendIcon />
								</div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
