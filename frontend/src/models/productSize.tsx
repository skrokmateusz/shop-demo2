interface ProductSize {
	category: string
	description: string
	id: number
	image: string
	price: number
	rating: {
		count: number
		rate: number
	}
	title: string
	size: string
	amount: number
	sizeId: string
}

export default ProductSize
