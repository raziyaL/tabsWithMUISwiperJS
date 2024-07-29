import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';


import { EffectCreative } from 'swiper/modules';


export const ThreeSwipe = ()=>{
    return(
        <>
            <h2>Effect creative</h2>
            <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            <SwiperSlide  style={{height:"600px"}}><img src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces" alt=""/></SwiperSlide>
            <SwiperSlide style={{height:"600px"}}><img src="https://i.ytimg.com/vi/dHT-8FlUj9k/hqdefault.jpg" alt=""/></SwiperSlide>
            <SwiperSlide  style={{height:"600px"}}><img src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces" alt=""/></SwiperSlide>
            <SwiperSlide  style={{height:"600px"}}><img src="https://i.ytimg.com/vi/dHT-8FlUj9k/hqdefault.jpg" alt=""/></SwiperSlide>
            <SwiperSlide  style={{height:"600px"}}><img src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces" alt=""/></SwiperSlide>
            <SwiperSlide  style={{height:"600px"}}><img src="https://i.ytimg.com/vi/dHT-8FlUj9k/hqdefault.jpg" alt=""/></SwiperSlide>

        </Swiper></>
    )
}