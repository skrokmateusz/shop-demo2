import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import ImageCategories from '../components/ImageCategories'
import TopRatedProducts from '../components/TopRatedProducts'
import Button from '../UI/Button'
import SliderJS from '../components/SliderJS'

import classes from './HomePage.module.css'

const HomePage: React.FC = () => {
	// useEffect(() => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	})
	// }, [])
	return (
		<>
			<main>
				<ImageCategories />
				<h2 className={classes['h2-header']}>Top rated products:</h2>
				<TopRatedProducts />
				<div className={classes['shop-now']}>
					<div className={classes.description}>
						<h3>Create your look</h3>
						<p>
							Discover your style at our shop! Trendy men's and women's clothing, stunning jewelry, and cutting-edge
							electronics.
						</p>
						<p>Shop now for great deals!</p>
						<Link to='/categories/all'><Button text="shop now" className="" onClick={() => {}}/></Link>
					</div>
					<div className={classes.image}>
						<img
							src="https://hyperfavor.com/cdn/shop/articles/istockphoto-1012145114-612x612_600x.jpg?v=1617009075"
							alt=""
						/>
					</div>
				</div>

				<h2 className={classes['h2-header']}>Trending now:</h2>
				<SliderJS condition="rating" />
				<div className={classes['shop-now']}>
					<div className={classes.image}>
						<img
							src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2015/04/Ananda-Soul-jewellery-store-in-Bali-Indonesia-1-900x642.jpg"
							alt=""
						/>
					</div>
					<div className={classes.description}>
						<h3>Create your look</h3>
						<p>
							Discover your style at our shop! Trendy men's and women's clothing, stunning jewelry, and cutting-edge
							electronics.
						</p>
						<p>Shop now for great deals!</p>
						<Link to='/categories/all'><Button text="shop now" className="" onClick={() => {}}/></Link>
					</div>
				</div>
			</main>
		</>
	)
}

export default HomePage
