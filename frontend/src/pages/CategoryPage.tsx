import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Card from '../UI/Card'

import { ProductsContext } from '../product-context/product-context'

import classes from '../pages/CategoryPage.module.css'

const MensClothesPage: React.FC = () => {
	const productsCtx = useContext(ProductsContext)
	const param = useParams()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<>
			<main>
				<div className={classes['nav-bar']}>
					<ul className={classes['nav-list']}>
						<Link to="../all">
							<button className={classes['nav-button']}>all</button>
						</Link>
						{productsCtx.categoriesList.map(item => (
							<Link key={item} to={`../${item}`}>
								<button className={classes['nav-button']}>{item}</button>
							</Link>
						))}
					</ul>
					<h2 className={classes.title}>{param.categoryTitle}</h2>
				</div>
				<div className={classes.container}>
					{productsCtx.products.map(item =>
						item.category === param.categoryTitle ? (
							<Card key={item.id} image={item.image} title={item.title} price={item.price} path={`${item.title.replaceAll('/', '-')}`} />
						) : null
					)}
				</div>
			</main>
		</>
	)
}

export default MensClothesPage
