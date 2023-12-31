import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CartItemCheckout from '../UI/CartItemCheckout'
import LoadingSpinner from '../UI/LoadingSpinner'

import ProductSize from '../models/productSize'

import { CartProductContext } from '../product-context/cart-product'

import classes from '../pages/CartPage.module.css'

const CartPage = () => {
	const [purchaseItems, setPurchaseItems] = useState(false)
	const cartProductCtx = useContext(CartProductContext)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	const payHandler = () => {
		setPurchaseItems(true)
		fetch('https://shop-demo2-server.vercel.app/api/create-checkout-session', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				items: cartProductCtx,
			}),
		})
			.then(res => {
				if (res.ok) {
					return res.json()
				} else
					return res.json().then(json => {
						Promise.reject(json)
					})
			})
			.then(({ url }) => {
				window.location = url
			})
			.catch(e => {
				console.error(e.error)
			})
		// setPurchaseItems(false)
		// const response = await fetch('https://shop-demo2-topaz.vercel.app/api/hello')
		// console.log(response)
	}

	const removeItemHandler = (item: ProductSize) => {
		cartProductCtx.removeItem(item)
	}

	const incrementItemHandler = (item: ProductSize) => {
		cartProductCtx.incrementItem(item)
	}

	const decrementItemHandler = (item: ProductSize) => {
		cartProductCtx.decrementItem(item)
	}

	return (
		<>
			<main>
				{cartProductCtx.items.length ? <h2 className={classes.header}>Your cart:</h2> : null}
				<div className={classes.wrapper}>
					<div className={classes.list}>
						<ul>
							{cartProductCtx.items.length ? (
								cartProductCtx.items.map(item => (
									<CartItemCheckout
										key={item.sizeId}
										title={item.title}
										image={item.image}
										size={item.size}
										price={item.price}
										amount={item.amount}
										onClick={removeItemHandler.bind(null, item)}
										onClickIncrement={incrementItemHandler.bind(null, item)}
										onClickDecrement={decrementItemHandler.bind(null, item)}
									/>
								))
							) : (
								<>
									<h2 className={classes['empty-cart-desc']}>Your cart is empty !</h2>
									<p className={classes['go-shopping-btn']}>
										<Link to="../categories/all">Go shopping</Link>
									</p>
								</>
							)}
						</ul>
					</div>
					{cartProductCtx.items.length ? (
						<div className={classes.summary}>
							<h2 className={classes['h2-summary']}>
								<span>Subtotal:</span>
								<span>${cartProductCtx.totalAmount.toFixed(2)}</span>
							</h2>
							{/* <Button text={`${buttonText}`} className={classes.button} onClick={payHandler} /> */}
							<button
								className={purchaseItems ? classes.disabled : classes.button}
								onClick={payHandler}
								disabled={purchaseItems}>
								<span>PURCHASE</span>
								<span className={classes.spinner}>{purchaseItems ? <LoadingSpinner /> : null}</span>
							</button>
							<p>Shipping, taxes and discount codes calculated at checkout.</p>
						</div>
					) : null}
				</div>
			</main>
		</>
	)
}

export default CartPage
