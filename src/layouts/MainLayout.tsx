import Header from './Header'
import Footer from './Footer'

interface ILayoutProps {
	children?: React.ReactNode
	className?: string
}

const MainLayout = ({ children, className = '' }: ILayoutProps) => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-background">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default MainLayout
