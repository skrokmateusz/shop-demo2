import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Card.module.css'

const Card: React.FC<{ image: string; title: string; price: number; path: string }> = props => {
	return (
		<Link to={props.path}>
			<div className={classes.box}>
				<div className={classes.image}>
					<img className={classes.img} src={props.image} alt={props.title} />
				</div>
				<div className={classes.description}>
					<p className={classes.title}>{props.title}</p>
					<p className={classes.price}>${props.price}</p>
				</div>
			</div>
		</Link>
	)
}

export default Card
