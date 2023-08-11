import React, { useContext } from 'react'

import Card from '../UI/Card'

import { ProductsContext } from '../product-context/product-context'

import classes from '../components/TopRatedProducts.module.css'

const TopRatedProducts: React.FC = () => {
	const productsCtx = useContext(ProductsContext)
	const topRatedProducts = productsCtx.products.filter(item => item.rating.rate > 3.8).slice(0, -1)

	return (
		<>
			<main>
				<div className={classes.container}>
					{topRatedProducts.map(prod =>
						prod.rating.rate > 3.8 ? (
							<Card
								key={prod.id}
								image={prod.image}
								title={prod.title}
								price={prod.price}
								path={`categories/${prod.category}/${prod.title}`}
							/>
						) : null
					)}
				</div>
			</main>
		</>
	)
}

export default TopRatedProducts
