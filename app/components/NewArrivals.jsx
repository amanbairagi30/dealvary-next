import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
//  Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import book1 from '../Home/hp.png'

const NewArrivals = () => {
    return (
        <div className='new-arrivals'>
            <div className="arrivals-content">
                <div className="arrivals-heading">
                    <h1>New Arrivals</h1>
                    <p>See all products</p>
                </div>
                <div className="arrivals-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        
                        //   zoom={true}
                        slidesPerView={3}
                        scrollbar={false}
                        navigation
                        // pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                        <SwiperSlide>
                            <div className="arrivals-book">
                            <div className='book-img'>
                                <img src={book1} alt="" />
                            </div>
                            <div className='arrive-book-detail'>
                                <p>⭐⭐⭐⭐ <span>4.9</span></p>
                                <h3>AEM-|| BTECH RTU</h3>
                                <p>AUTHOR:PROF K.C. SARGANGI <br />&MORE</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="arrivals-book">
                            <div className='book-img'>
                                <img src={book1} alt="" />
                            </div>
                            <div className='arrive-book-detail'>
                                <p>⭐⭐⭐⭐ <span>4.9</span></p>
                                <h3>AEM-|| BTECH RTU</h3>
                                <p>AUTHOR:PROF K.C. SARGANGI <br />&MORE</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="arrivals-book">
                            <div className='book-img'>
                                <img src={book1} alt="" />
                            </div>
                            <div className='arrive-book-detail'>
                                <p>⭐⭐⭐⭐ <span>4.9</span></p>
                                <h3>AEM-|| BTECH RTU</h3>
                                <p>AUTHOR:PROF K.C. SARGANGI <br />&MORE</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="arrivals-book">
                            <div className='book-img'>
                                <img src={book1} alt="" />
                            </div>
                            <div className='arrive-book-detail'>
                                <p>⭐⭐⭐⭐ <span>4.9</span></p>
                                <h3>AEM-|| BTECH RTU</h3>
                                <p>AUTHOR:PROF K.C. SARGANGI <br />&MORE</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="arrivals-book">
                            <div className='book-img'>
                                <img src={book1} alt="" />
                            </div>
                            <div className='arrive-book-detail'>
                                <p>⭐⭐⭐⭐ <span>4.9</span></p>
                                <h3>AEM-|| BTECH RTU</h3>
                                <p>AUTHOR:PROF K.C. SARGANGI <br />&MORE</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
