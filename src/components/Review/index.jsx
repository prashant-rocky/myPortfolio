import reviewBanner from '../../assets/ReviwBg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/style.css'
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/data';
const Review = () => {
    return (
        <section className="review py-5 position-relative" style={{ backgroundImage: `url(${reviewBanner})` }}>
            <div className="container text-center text-white position-relative">
                <h4 className='bioHeading'>Testimonial</h4>
                <h1 className='ff'>What They Says</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {
                        reviews.map(review => {
                            return (
                                <SwiperSlide className='p-4 text-start'>
                                    <img src={review.ImgSrc} alt="err" className='customerImg' />
                                    <h4 className='bioHeading'>{review.name}</h4>
                                    <p>{review.comments}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide> */}
                </Swiper>
            </div>
        </section >
    )
}
export default Review;