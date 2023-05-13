import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
//  Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Parallax } from 'react-parallax'
import book1 from '../Home/hp.png'

const Testimoinall = () => {

    return (
        <section className='testimonial'>
            <div class="slideshow-container" id="scrolling-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    //   zoom={true}
                    slidesPerView={1}
                    scrollbar={false}
                    navigation
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                // className='swiper'
                >
                    <SwiperSlide>
                        <div className="swiper-slide slide">
                            <div class="numbertext"><p>"As an engineering student, I highly recommend this bookstore for its extensive collection of engineering textbooks and resources. It's been my go-to source for all my course materials and has never failed to provide me with the latest editions and helpful study guides."</p></div>
                            <div className="rate">
                                <div className='rate-img'><img src={book1} alt="" /></div>
                                <div><h3>Laura Dave</h3>
                                    <p>⭐⭐⭐⭐<span>4.8</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide slide">
                            <div class="numbertext"><p>"As an engineering student, I highly recommend this bookstore for its extensive collection of engineering textbooks and resources. It's been my go-to source for all my course materials and has never failed to provide me with the latest editions and helpful study guides."</p></div>
                            <div className="rate">
                                <div className='rate-img'><img src={book1} alt="" /></div>
                                <div><h3>Laura Dave</h3>
                                    <p>⭐⭐⭐⭐<span>4.8</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide slide">
                            <div class="numbertext"><p>"As an engineering student, I highly recommend this bookstore for its extensive collection of engineering textbooks and resources. It's been my go-to source for all my course materials and has never failed to provide me with the latest editions and helpful study guides."</p></div>
                            <div className="rate">
                                <div className='rate-img'><img src={book1} alt="" /></div>
                                <div>
                                    <h3>Laura Dave</h3>
                                    <p>⭐⭐⭐⭐<span>4.8</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="points-five">
                <div className="point">
                    <div className="number">
                        1
                    </div>
                    <p className="number-text">
                        Extensive Collection
                    </p>
                </div>
                <div className="point">
                    <div className="number">
                        2
                    </div>
                    <p className="number-text">
                        Easy Navigation
                    </p>
                </div>
                <div className="point">
                    <div className="number">
                        3
                    </div>
                    <p className="number-text">
                        Competitive Pricing
                    </p>
                </div>
                <div className="point">
                    <div className="number">
                        4
                    </div>
                    <p className="number-text">
                        Reviews And Rating
                    </p>
                </div>
                <div className="point">
                    <div className="number">
                        5
                    </div>
                    <p className="number-text">
                        Responsive Customer Services
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimoinall
