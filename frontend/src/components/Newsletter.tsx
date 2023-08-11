import classes from '../components/Newsletter.module.css'

const Newsletter: React.FC = () => {
	const newsletterHandler = (event: React.FormEvent) => {
		event.preventDefault()
	}

	return (
		<div className={classes.newsletter}>
			<h3 className={classes.title}>Newsletter</h3>
			<p>
				Catch the Latest Deals & Stay Updated! Subscribe to Our Newsletter for Exclusive Offers, New Arrivals, and
				Insider Tips. Join Our Community & Enjoy Shopping Benefits Now!"
			</p>
			<form className={classes.form} onSubmit={newsletterHandler}>
				<input className={classes.input} type="text"></input>
				<button className={classes.button}>Subscribe</button>
			</form>
		</div>
	)
}

export default Newsletter
