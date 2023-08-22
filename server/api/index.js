// const app = require('express')();
// const { v4 } = require('uuid');

require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(
	cors({
		origin: 'https://shop-demo2-p1cc.vercel.app/',
	})
)

const stripe = require('stripe')(
	'sk_test_51NaepIKHUEeYaJvQUaUY84A2yzFbvCrF66gQGDHdaYczlkj83EulcFLQlcIYEURYY4QBRnW8IE0m9CWuTEtwCCwr00ciOYH1Pi'
)

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

app.post('/api/create-checkout-session', async (req, res) => {
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
			success_url: `https://shop-demo2-p1cc.vercel.app/success`,
			cancel_url: `https://shop-demo2-p1cc.vercel.app/cancel`,
		})
		res.json({ url: session.url })
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})

app.get('/api/hello', (req, res) => {
	res.json({ hello: 'hello' })
})

app.listen('https://shop-demo2-murex.vercel.app/')

module.exports = app
