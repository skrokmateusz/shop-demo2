import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import CartItem from '../UI/CartItem'
import Button from '../UI/Button'

import { CartProductContext } from '../product-context/cart-product'

import ProductSize from '../models/productSize'

import classes from '../components/Cart.module.css'

const Cart: React.FC<{ onClick: () => void }> = props => {
	const cartProductCtx = useContext(CartProductContext)

	const removeItemHandler = (item: ProductSize) => {
		cartProductCtx.removeItem(item)
	}

	return (
		<div className={classes.container}>
			<div className={`${classes.remove} ${classes['remove-checkout']}`} onClick={props.onClick}>
				<FontAwesomeIcon icon={faXmark} />
			</div>
			{cartProductCtx.items.length ? (
				<>
					<h2>Your shopping cart:</h2>
					<ul className={classes['cart-items']}>
						{cartProductCtx.items.map(item => (
							<CartItem
								key={`${item.id}${item.size}`}
								image={item.image}
								title={item.title}
								size={item.size}
								price={item.price}
								amount={item.amount}
								onClick={removeItemHandler.bind(null, item)}
							/>
						))}
					</ul>
					<h2>
						<span>Subtotal:</span>
						<span>${cartProductCtx.totalAmount.toFixed(2)}</span>
					</h2>
					<Link to="cart">
						<Button text="GO TO CHECKOUT" className={classes.button} onClick={props.onClick} />
					</Link>
				</>
			) : (
				<h2>Your cart is empty!</h2>
			)}
		</div>
	)
}

export default Cart
