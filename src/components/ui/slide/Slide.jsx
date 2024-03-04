import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./slider.css"
const slideImages = [
    {
        id: 1,
        url: "desktop/otel-5-stars.jpg",
        mobile_url:"mobile/dark-theme-upscaled-mobile.jpg",
        text: "Luxurious Accommodation",
        description: "Indulge in our luxurious accommodation options, designed for comfort and elegance."

    },
    {
        id: 2,
        url: "desktop/otel-promotion.jpg",
        mobile_url:"mobile/outdoor-upscaled-mobile.jpg",
        text: "First Class Dining Experience",
        description: "Savor exquisite flavors at our world-class restaurants, crafted with care by talented chefs."


    },
    {
        id: 3,
        url: "desktop/dark-theme-upscaled.jpg",
        mobile_url:"mobile/promotion-upscaled-mobile.jpg",
        text: "Unparalleled Leisure Facilities",
        description: "Experience ultimate relaxation at our unparalleled leisure facilities, offering a range of amenities for your enjoyment."


    }
]
const Slide = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
        >
            {
                slideImages.map(item =>
                    <SwiperSlide key={item.id} >
                        <>
                            <img className='hidden sm:block' src={item.url} alt={item.url} />
                            <img className='block sm:hidden' src={item.mobile_url} alt={item.mobile_url} />

                            <div className='slider-text'>
                                <h2 className='slider-h2 '>{item.text}</h2>
                                <p className='slider-p'>{item.description}</p>

                            </div>
                        </>
                    </SwiperSlide>

                )
            }


        </Swiper>

    )
}

export default Slide