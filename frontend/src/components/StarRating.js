import { useState } from 'react'

import classes from '../components/StarRating.module.css'

const StarRating = props => {
	const [rating, setRating] = useState(Math.round(props.rate))
	const [hover, setHover] = useState(0)
	return (
		<div className={classes['star-rating']}>
			{[...Array(5)].map((star, index) => {
				index += 1
				return (
					<button
						type="button"
						key={index}
						className={index <= (hover || rating) ? classes.on : classes.off}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}>
						<span className="star">&#9733;</span>
					</button>
				)
			})}
		</div>
	)
}

export default StarRating
