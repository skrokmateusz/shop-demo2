import React from 'react'

import classes from './Button.module.css'

const Button: React.FC<{ text: string; className: string; onClick: () => void }> = props => {
	return (
		<button className={`${classes.button} ${props.className}`} onClick={props.onClick}>
			{props.text}
		</button>
	)
}

export default Button
