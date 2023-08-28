import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '../UI/Card'
import { ProductsContext } from '../product-context/product-context'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './Slider.css'

// import required modules
import { Pagination } from 'swiper/modules'

function SliderJS(props) {
	const productsCtx = useContext(ProductsContext)

	const condition =
		props.condition === 'rating'
			? productsCtx.products.map(prod =>
					prod.rating.count > 350 ? (
						<SwiperSlide className='swiper-slide' key={prod.id}>
							<Card
								key={prod.id}
								title={prod.title}
								image={prod.image}
								price={prod.price}
								path={`/categories/${prod.category}/${prod.title.replaceAll('/', '-')}`}
							/>
						</SwiperSlide>
					) : null
			  )
			: productsCtx.products.map(prod =>
					prod.category === props.condition && prod.id !== props.id ? (
						<SwiperSlide key={prod.id}>
							<Card
								key={prod.id}
								title={prod.title}
								image={prod.image}
								price={prod.price}
								path={`../${prod.category}/${prod.title}`}
							/>
						</SwiperSlide>
					) : null
			  )

	return (
		<>
		<div className='swiper-container'></div>
			<Swiper
			spaceBetween={2}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="swiper" breakpoints={{
					576: {
						width: 576,
						slidesPerView: 2
					},
					900: {
						width: 900,
						slidesPerView: 3
					},
					1200: {
						width: 1200,
						slidesPerView: 4
					}
				}}>
				{condition}
			</Swiper>
		</>
	)
}

export default SliderJS
