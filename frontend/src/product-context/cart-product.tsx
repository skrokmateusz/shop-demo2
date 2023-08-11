import React, { useReducer } from 'react'

import ProductSize from '../models/productSize'

type CartContextObj = {
	items: ProductSize[]
	totalAmount: number
	addItem: (item: ProductSize) => void
	removeItem: (item: ProductSize) => void
	incrementItem: (item: ProductSize) => void
	decrementItem: (item: ProductSize) => void
}

export const CartProductContext = React.createContext<CartContextObj>({
	items: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
	incrementItem: id => {},
	decrementItem: id => {},
})

type initialState = {items: ProductSize[], totalAmount: number}

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state: initialState, action: {type: string, payload: ProductSize}): any => {
	if (action.type === 'ADD') {

		const existingCartItemIndex = state.items.findIndex((item: ProductSize) => item.sizeId === action.payload.sizeId)
		const existingCartItem = state.items[existingCartItemIndex]

		let updatedTotalAmount
		let updatedItems: ProductSize[] = []
		if (existingCartItem) {
			alert('You have already added this product to cart!')
			updatedItems = [...state.items]
			updatedTotalAmount = state.totalAmount
		} else {
			updatedItems = state.items.concat(action.payload)
			updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}
	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex((item: ProductSize) => item.sizeId === action.payload.sizeId)

		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - existingItem.price * existingItem.amount

		let updatedItems

		updatedItems = state.items.filter((item: ProductSize) => item.sizeId !== action.payload.sizeId)

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}

	if (action.type === 'INCREMENT') {
		const updatedTotalAmount = state.totalAmount + action.payload.price

		const existingCartItemIndex = state.items.findIndex((item: ProductSize) => item.sizeId === action.payload.sizeId)
		const existingCartItem = state.items[existingCartItemIndex]

		console.log(action.payload.amount);

		let updatedItems

		if (existingCartItem) {
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: +existingCartItem.amount + 1,
				}
				updatedItems = [...state.items]
				updatedItems[existingCartItemIndex] = updatedItem
			} else {
				updatedItems = state.items.concat(action.payload)
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			}
		}
	}
	if (action.type === 'DECREMENT') {
		const existingCartItemIndex = state.items.findIndex((item: ProductSize) => item.sizeId === action.payload.sizeId)
		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - existingItem.price
		let updatedItems
		if (+existingItem.amount === 1) {
			updatedItems = state.items.filter((item: ProductSize) => item.sizeId !== action.payload.sizeId)
	
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}
}

const CartProductContextProvider: React.FC<{ children: any }> = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


	const addItemToCartHandler = (item: ProductSize) => {
		dispatchCartAction({ type: 'ADD', payload: item })
	}

	const removeItemFromCartHandler = (item: ProductSize) => {
		dispatchCartAction({ type: 'REMOVE', payload: item })
	}

	const incrementItemFromCartHandler = (item: ProductSize) => {
		dispatchCartAction({ type: 'INCREMENT', payload: item })
	}

	const decrementItemFromCartHandler = (item: ProductSize) => {
		dispatchCartAction({type: 'DECREMENT', payload: item})
	}

	const contextCart = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		incrementItem: incrementItemFromCartHandler,
		decrementItem: decrementItemFromCartHandler
	}

	return <CartProductContext.Provider value={contextCart}>{props.children}</CartProductContext.Provider>
}

export default CartProductContextProvider
