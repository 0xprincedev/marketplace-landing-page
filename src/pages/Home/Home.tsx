import MainLayout from 'layouts/MainLayout'
import Hero from './Section/Hero'
import LiveAuctions from './Section/LiveAuctions'
import TopSeller from './Section/TopSeller'
import TodayPicks from './Section/TodayPicks'
import PopularCollection from './Section/PopularCollection'
import CreateAndSellYourNFTs from './Section/CreateAndSellYourNFTs'

const Home = () => {
	return (
		<MainLayout>
			<Hero />
			<LiveAuctions />
			<TopSeller />
			<TodayPicks />
			<PopularCollection />
			<CreateAndSellYourNFTs />
		</MainLayout>
	)
}

export default Home
