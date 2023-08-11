import React, { useState, useEffect } from 'react'

import Product from '../models/product'

type ProductsContextObj = { products: Product[], categoriesList: string[] }

export const ProductsContext = React.createContext<ProductsContextObj>({
	products: [],
	categoriesList: []
})

const ProductsContextProvider: React.FC<{ children: any }> = props => {
	const [products, setProducts] = useState<Product[]>([])
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://fakestoreapi.com/products')
			const data = await response.json()
			setProducts(data)
		
		}
		fetchData()
	}, [])
	
	let productList: Product[] = []
	for (const key in products) {
		productList.push(products[key])
	}
	
	let categoriesList: string[] = []
	// productsCtx.products.filter(item => (categories.includes(item.category) ? null : categories.push(item.category)))
	productList.filter(item => categoriesList.includes(item.category) ? null : categoriesList.push(item.category))


	const contextValue: ProductsContextObj = {
		products: productList,
		categoriesList: categoriesList
	}

	return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>
}

export default ProductsContextProvider
