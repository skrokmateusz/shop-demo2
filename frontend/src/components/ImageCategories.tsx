import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../components/ImageCategories.module.css'

const ImageCategories: React.FC = () => {
	return (
		<div className={classes.categories}>
			<div className={classes.men}>
				<Link to="categories/men's clothing">
					<p>Men's Clothes</p>
					<img
						className={classes['men-img']}
						src="https://i.pinimg.com/736x/f3/b9/08/f3b90828550d865c7281201bbe7af9e8.jpg"
						alt=""
					/>
				</Link>
			</div>
			<div className={classes.others}>
				<div className={classes.electronics}>
					<Link to="categories/electronics">
						<p>Electronics</p>
						<img
							className={classes['electronics-img']}
							src="https://www.royalautomobileclub.co.uk/wp-content/uploads/2021/01/shutterstock_tablet_laptop_phone-scaled.jpg"
							alt=""
						/>
					</Link>
				</div>
				<div className={classes.jewelery}>
					<Link to="categories/jewelery">
						<p>Jewelery</p>
						<img
							className={classes['jewelery-img']}
							src="https://media.istockphoto.com/id/972420664/photo/wedding-rings-on-wood.jpg?s=612x612&w=0&k=20&c=PnjITSA5_VKFNlRequYFbN5cm6ga_bpLzrIXQIi57O0="
							alt=""
						/>
					</Link>
				</div>
			</div>
			<div className={classes.women}>
				<Link to="categories/women's clothing">
					<p>Women's Clothes</p>
					<img
						className={classes['women-img']}
						src="https://www.outfit-styles.com/wp-content/uploads/2020/02/Best-Casual-Wear-for-Women.jpg"
						alt=""
					/>
				</Link>
			</div>
		</div>
	)
}

export default ImageCategories
