import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import classes from '../components/BurgerNav.module.css'

const BurgerNav: React.FC<{ onClick: () => void }> = props => {
	return (
		<div className={classes.container}>
			<div className={`${classes.remove} ${classes['remove-checkout']}`} onClick={props.onClick}>
				<FontAwesomeIcon icon={faXmark} />
			</div>
			<div className={classes.list}>
				<ul>
					<Link to='/categories/all' onClick={props.onClick}><li>categories</li></Link>
				</ul>
			</div>
		</div>
	)
}

export default BurgerNav
