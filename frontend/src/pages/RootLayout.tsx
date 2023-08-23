import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const RootLayout: React.FC = () => {
	return (
		<>
			<MainNavigation />
			<Outlet />
			<Newsletter />
			<Footer />
		</>
	)
}

export default RootLayout
