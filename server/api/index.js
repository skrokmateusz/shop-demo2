// const app = require('express')();
// const { v4 } = require('uuid');

require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(
	cors({
		origin: `${process.env.CLIENT_URL}`,
	})
)

const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

// app.get('/api', (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });

// app.get('/api/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

app.post('/create-checkout-session', async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: req.body.items.items.map(item => {
				return {
					price_data: {
						currency: 'usd',
						product_data: {
							name: item.title,
						},
						unit_amount: item.price * 100,
					},
					quantity: item.amount,
				}
			}),
			success_url: `${process.env.CLIENT_URL}/success`,
			cancel_url: `${process.env.CLIENT_URL}/cancel`,
		})
		res.json({ url: session.url })
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})

app.get('/hello', (req, res) => {
	res.json('Hello')
})

app.listen(4000)

module.exports = app
