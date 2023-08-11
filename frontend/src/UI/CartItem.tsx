import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import classes from '../UI/CartItem.module.css'

const CartItem: React.FC<{
	title: string
	image: string
	size: string
	price: number
	amount: number
	onClick: () => void
}> = props => {
	return (
		<li className={`${classes.box} ${classes['box-checkout']}`}>
			<div className={`${classes.container} ${classes['container-checkout']}`}>
				<div className={`${classes.image} ${classes['image-checkout']}`}>
					<img className={classes.img} src={props.image} alt="" />
				</div>
				<div className={`${classes.description} ${classes['description-checkout']}`}>
					<div className={`${classes.remove} ${classes['remove-checkout']}`}>
						<FontAwesomeIcon icon={faXmark} onClick={props.onClick} />
					</div>
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
				</div>
			</div>
		</li>
	)
}

export default CartItem
