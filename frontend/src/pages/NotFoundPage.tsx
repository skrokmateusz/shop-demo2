import { Link } from 'react-router-dom'

import classes from '../pages/CartPage.module.css'

const NotFoundPage = () => {
	return (
		<main>
			<h2 className={classes['empty-cart-desc']}>Your payment was cancelled or aborted.</h2>
			<p className={classes['go-shopping-btn']}>
				<Link to="../categories/all">Go shopping</Link>
			</p>
		</main>
	)
}

export default NotFoundPage
