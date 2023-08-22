import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const RootLayout: React.FC = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])
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
