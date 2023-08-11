import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import BurgerNav from './BurgerNav'
import Cart from './Cart'
import CartIcon from '../UI/CartIcon'
import Modal from '../UI/Modal'

import { CartProductContext } from '../product-context/cart-product'

import classes from './MainNavigation.module.css'

const MainNavigation: React.FC = () => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false)
	const [cartIsShown, setCartIsShown] = useState<boolean>(false)
	const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)

	const cartProductCtx = useContext(CartProductContext)
	const itemsCount = cartProductCtx.items.length

	useEffect(() => {
		if (itemsCount === 0) {
			return
		}
		setBtnIsHighlighted(true)
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false)
		}, 300)
		return () => {
			clearTimeout(timer)
		}
	}, [itemsCount])

	const badgeClasses = `${classes.badge} ${btnIsHighlighted ? classes.bump : ''}`

	const showCheckoutHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	const showBurgerMenuHandler = () => {
		setShowBurgerMenu(true)
	}

	const hideBurgerMenuHandler = () => {
		setShowBurgerMenu(false)
	}

	return (
		<>
			<div className={classes.underline}>
				<div className={classes.nav}>
					<div className={classes.logo}>
						<Link to="/">
							<img
								className={classes.img}
								src="https://dynamic.brandcrowd.com/asset/logo/f195d32e-5faf-4fa2-93c2-716848cbe453/logo-search-grid-1x?logoTemplateVersion=1&v=637919153564370000"
								alt="logo"
							/>
						</Link>
					</div>
					<div className={classes['nav-bar']}>
						<ul className={classes.list}>
							<li>
								<Link to="categories/all">categories</Link>
							</li>
						</ul>
						<button onClick={showBurgerMenuHandler} className={classes['burger-btn']}>
							<div className={classes['burger-btn__box']}>
								<div className={classes['burger-btn__bars']}></div>
							</div>
						</button>

						<div className={badgeClasses} onClick={showCheckoutHandler}>
							<span className={classes.icon}>
								<CartIcon />
							</span>
							<span className={itemsCount === 0 ? classes['items-count-zero'] : classes['items-count']}>
								{itemsCount}
							</span>
						</div>
					</div>
				</div>
			</div>
			{cartIsShown && (
				<Modal onClick={hideCartHandler}>
					<Cart onClick={hideCartHandler} />
				</Modal>
			)}
			{showBurgerMenu && (
				<Modal onClick={hideBurgerMenuHandler}>
					<BurgerNav onClick={hideBurgerMenuHandler} />
				</Modal>
			)}
		</>
	)
}

export default MainNavigation
