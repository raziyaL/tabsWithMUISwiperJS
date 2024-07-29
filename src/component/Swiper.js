import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import img from "./images.png"
import 'swiper/css';
import 'swiper/css/pagination';


export const OneSwipe = ()=>{
    return(
        <>
            <h2>
                Slides per view</h2>

            <Swiper

            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img} alt=""/></SwiperSlide>
        </Swiper></>

    )
}



export const FiveSwipe = ()=>{
return(
    <h1>djwadkld</h1>
)
}