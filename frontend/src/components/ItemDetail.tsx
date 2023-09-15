import React, { FormEvent, useContext, useState, useRef, ChangeEvent, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import StarRating from './StarRating'
import SliderJS from './SliderJS'

import { CartProductContext } from '../product-context/cart-product'

import Product from '../models/product'

import classes from '../components/ItemDetail.module.css'
import ProductSize from '../models/productSize'

const ItemDetail: React.FC<{ productsCtx: { products: Product[]; categoriesList: string[] } }> = props => {
	const param = useParams()
	const amountInputRef = useRef<HTMLInputElement>(null)
	const cartProductCtx = useContext(CartProductContext)

	const product = props.productsCtx.products.filter((prod: Product) => prod.title.replaceAll('/','-').trim() === param.productsId)
	const prodId = product[0]

	const [isSizeChosen, setIsSizeChozen] = useState<boolean>(false)
	const [bigPicture, setBigPicture] = useState<string>('')
	const [chosenSize, setChosenSize] = useState<string>('')
	const [alreadyInCart, setAlreadyInCart] = useState<boolean>(false)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [prodId])

	const pictureHandler = (event: any) => {
		setBigPicture(event.target.closest('img').src)
	}

	const changeSizeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault()
		setChosenSize(event.target.value)
		setIsSizeChozen(false)
		setAlreadyInCart(false)
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	const submitHandler = (event: FormEvent) => {
		event.preventDefault()
		const enteredAmount: number = +amountInputRef.current!.value

		const existingItem = cartProductCtx.items.findIndex(
			(product: ProductSize) => product.sizeId === `${chosenSize}${prodId.title}`
		)

		if (existingItem !== -1) {
			setAlreadyInCart(true)
			return
		}

		if (
			(!chosenSize && prodId.category === "men's clothing" && prodId.id !== 1) ||
			(!chosenSize && prodId.category === "women's clothing")
		) {
			setIsSizeChozen(true)
			return
		}
		const newProd = {
			...prodId,
			size: chosenSize,
			amount: enteredAmount,
			sizeId: `${chosenSize}${prodId.title}`,
		}
		cartProductCtx.addItem(newProd)
	}

	return (
		<>
			<main>
				<Link to={`../${prodId.category}`}>
					<button className={classes['back-btn']}>back</button>
				</Link>
				<div className={classes.container}>
					<div className={classes.images}>
						<div className={classes['small-images']}>
							<div className={classes['small-image']} onClick={pictureHandler}>
								<img src={prodId.image} alt="" />
							</div>
							<div className={classes['small-image']} onClick={pictureHandler}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnoQfEpyZdjIUgdB4K5Y111TkVOKEFIuDfqVUFd2YrvCO-nMbRY3oaIDsBS9r8MdrgJ0&usqp=CAU"
									alt=""
								/>
							</div>
							<div className={classes['small-image']} onClick={pictureHandler}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsj705IQyT5CWP_e8ctdLj2VTa8ZDB57txqYdjZxiSlQTNI02lwyxLgTxzTvTECn35XA&usqp=CAU"
									alt=""
								/>
							</div>
							<div className={classes['small-image']} onClick={pictureHandler}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1HZeagx24DRo5w0i7clQLq4yFfZWiZDyZuKxQuqfkEdblrKC2X2cbx6sMGJXDtLZjoU&usqp=CAU"
									alt=""
								/>
							</div>
						</div>
						<div className={classes['big-image']}>
							<img src={!bigPicture ? prodId.image : bigPicture} alt="" />
						</div>
					</div>
					<div className={classes.description}>
						<h2>{prodId.title}</h2>
						<p className={classes.descr}>{prodId.description}</p>
						<p className={classes.price}>${prodId.price}</p>
						<div className={classes.star}>
							<StarRating rate={prodId.rating.rate} />
							<p> {prodId.rating.rate}/5 </p>
							<p>({prodId.rating.count})</p>
						</div>
						<form className={classes.form} onSubmit={submitHandler}>
							{(prodId.category === "men's clothing" && prodId.id !== 1) || prodId.category === "women's clothing" ? (
								<div className={classes.option}>
									<label htmlFor="text">Choose your size:</label>
									<select onChange={changeSizeHandler}>
										<option value="" hidden>
											Select your size
										</option>
										<option value="S" id="S">
											S
										</option>
										<option value="M" id="M">
											M
										</option>
										<option value="L" id="L">
											L
										</option>
										<option value="XL" id="XL">
											XL
										</option>
										<option value="XXL" id="XXL">
											XXL
										</option>
									</select>
								</div>
							) : null}
							{isSizeChosen && <p className={classes['invalid-size']}>You must add your size!</p>}
							{alreadyInCart && <p className={classes['invalid-size']}>You have already added this item to cart!</p>}
							<div className={classes.buttons}>
								<input
									className={classes.amount}
									type="number"
									min={1}
									step={1}
									defaultValue={1}
									ref={amountInputRef}
								/>

								<button className={classes['add-btn']}>ADD TO CART</button>
							</div>
						</form>
					</div>
				</div>

				<h2 className={classes['also-like']}>You may also like in this category:</h2>
				<SliderJS condition={prodId.category} id={prodId.id} />
			</main>
		</>
	)
}

export default ItemDetail
