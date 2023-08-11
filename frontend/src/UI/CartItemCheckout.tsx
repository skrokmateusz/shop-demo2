import React from 'react'

import classes from '../UI/CartItemCheckout.module.css'

const CartItemCheckout: React.FC<{
	title: string
	image: string
	size: string
	price: number
	amount: number
	onClick: () => void
	onClickIncrement: () => void
	onClickDecrement: () => void
}> = props => {
	return (
		<li className={`${classes.box} ${classes['box-checkout']}`}>
			<div className={`${classes.container} ${classes['container-checkout']}`}>
				<div className={`${classes.image} ${classes['image-checkout']}`}>
					<img src={props.image} alt="" />
				</div>
				<div className={`${classes.description} ${classes['description-checkout']}`}>
					<h3 className={`${classes.title} ${classes['title-checkout']}`}>
						<span>{props.amount}</span>
						<span>x</span>
						<span>{props.title}</span>
					</h3>
					{props.size ? (
						<p className={`${classes.price} ${classes['price-checkout']}`}>
							<span className={`${classes['size-title']} ${classes['size-title-checkout']}`}>Size:</span>
							<span className={`${classes['size-product']} ${classes['size-product-checkout']}`}>{props.size}</span>
						</p>
					) : null}
					<p className={`${classes.price} ${classes['price-checkout']}`}>
						<span className={`${classes['size-title']} ${classes['size-title-checkout']}`}>Price:</span>
						<span className={`${classes['size-product']} ${classes['size-product-checkout']}`}>$ {props.price}</span>
					</p>
					<div className={classes.edit}>
						<button className={classes.button} onClick={props.onClickIncrement}>
							+
						</button>
						<input type="text" min={0} step={1} defaultValue={1} />
						<button className={classes.button} onClick={props.onClickDecrement}>
							-
						</button>
					</div>
					<p className={classes.remove} onClick={props.onClick}>
						Remove
					</p>
				</div>
			</div>
		</li>
	)
}

export default CartItemCheckout
