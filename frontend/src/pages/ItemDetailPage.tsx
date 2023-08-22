import { useEffect } from 'react'
import { useLoaderData, defer } from 'react-router-dom'

import ItemDetail from '../components/ItemDetail'

import Product from '../models/product'

const ItemDetailPage = () => {
	const products = useLoaderData() as { products: Product[]; categoriesList: string[] }
	// useEffect(() => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	})
	// }, [])

	return (
		<>
			<main>
				<ItemDetail productsCtx={products} />
			</main>
		</>
	)
}

export default ItemDetailPage

export const loader = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	const data = await response.json()

	let productList: Product[] = []
	for (const key in data) {
		productList.push(data[key])
	}

	let categoriesList: string[] = []

	productList.filter(item => (categoriesList.includes(item.category) ? null : categoriesList.push(item.category)))

	return defer({
		products: productList,
		categoriesList: categoriesList,
	})
}
