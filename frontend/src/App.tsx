import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import ItemDetailPage, { loader as productsLoader } from './pages/ItemDetailPage'
import AllCategoriesPage from './pages/AllCategoriesPage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'
import NotFoundPage from './pages/NotFoundPage'

import ProductsContextProvider from './product-context/product-context'
import CartProductContextProvider from './product-context/cart-product'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'categories',
				children: [
					{
						path: 'all',
						element: <AllCategoriesPage />,
					},
					{
						path: ':categoryTitle',
						element: <CategoryPage />,
					},
					{
						path: "men's clothing/:productsId",
						id: 'product-detail-mens',
						element: <ItemDetailPage />,
						loader: productsLoader,
					},
					{
						path: "women's clothing/:productsId",
						id: 'product-detail-women',
						element: <ItemDetailPage />,
						loader: productsLoader,
					},
					{
						path: 'jewelery/:productsId',
						id: 'product-detail-jewelery',
						element: <ItemDetailPage />,
						loader: productsLoader,
					},
					{
						path: 'electronics/:productsId',
						id: 'product-detail-electronics',
						element: <ItemDetailPage />,
						loader: productsLoader,
					},
				],
			},
			{ path: 'cart', element: <CartPage /> },
			{ path: 'success', element: <CheckoutSuccessPage /> },
			{ path: 'cancel', element: <NotFoundPage /> },
		],
	},
])

function App() {
	return (
		<ProductsContextProvider>
			<CartProductContextProvider>
				<RouterProvider router={router} />
			</CartProductContextProvider>
		</ProductsContextProvider>
	)
}

export default App
