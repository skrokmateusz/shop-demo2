import { Link } from 'react-router-dom'

import classes from '../pages/CartPage.module.css'

const CheckoutSuccessPage = () => {
	return (
		<main>
			<h2 className={classes['empty-cart-desc']}>Your payment was successful. Thank you for your purchases!</h2>
			<p className={classes['go-shopping-btn']}>
				<Link to="..">Go home page.</Link>
			</p>
		</main>
	)
}

export default CheckoutSuccessPage
