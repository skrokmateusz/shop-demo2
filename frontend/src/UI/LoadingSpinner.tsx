import React from 'react'

import classes from '../UI/LoadingSpinner.module.css'

const LoadingSpinner: React.FC = () => {
	return (
		<div className={classes['spinner-container']}>
			<div className={classes['loading-spinner']}></div>
		</div>
	)
}

export default LoadingSpinner
