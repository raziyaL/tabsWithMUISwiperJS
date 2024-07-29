import React from "react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export const TwoSwipe = ()=>{
    return(
        <>
            <h2>
                Slides per group skip</h2>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{height: '551px'}}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd9_fOIYP6sXPzZaQQa0qbX0BMWPoA_wehA&s"
                        alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUoIz14Hn1B6BS7q8VwPjXdrz6vO8oowh1A&s"
                        alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd9_fOIYP6sXPzZaQQa0qbX0BMWPoA_wehA&s"
                        alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUoIz14Hn1B6BS7q8VwPjXdrz6vO8oowh1A&s"
                        alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUoIz14Hn1B6BS7q8VwPjXdrz6vO8oowh1A&s"
                        alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" alt="img"/>
                </SwiperSlide>
                <SwiperSlide style={{height: '551px'}}>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" alt="img"/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}