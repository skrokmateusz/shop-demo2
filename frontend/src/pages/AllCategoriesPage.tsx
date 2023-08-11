import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Card from '../UI/Card'

import { ProductsContext } from '../product-context/product-context'

import classes from '../pages/AllCategoriesPage.module.css'

const AllCategoriesPage: React.FC = () => {
	const productsCtx = useContext(ProductsContext)

	let categories: string[] = []
	productsCtx.products.filter(item => (categories.includes(item.category) ? null : categories.push(item.category)))

	return (
		<>
			<main>
				<div className={classes['nav-bar']}>
					<ul className={classes['nav-list']}>
						<Link to="">
							<button className={classes['nav-button']}>all</button>
						</Link>
						{categories.map(item => (
							<Link key={item} to={`../${item}`}>
								<button className={classes['nav-button']}>{item}</button>
							</Link>
						))}
					</ul>
					<h2 className={classes.title}>ALL</h2>
				</div>
				<div className={classes.container}>
					{productsCtx.products.map(item => (
						<Card
							key={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							path={`../${item.category}/${item.title}`}
						/>
					))}
				</div>
			</main>
		</>
	)
}

export default AllCategoriesPage
