import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import "./five.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Pagination,   Mousewheel } from 'swiper/modules';



export const FourSwipe = ()=>{
    return(
        <>
            <h2>
                Вертикальный</h2>
            <Swiper
                style={{height:"600px"}}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"600px"}}><img src="https://mala.ae/wp-content/uploads/2023/02/Adventure5.png" alt=""/></SwiperSlide>

            </Swiper>
        </>
    )
}


export const Five =()=>{
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <h2>Пользовательская пагинация</h2>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>
                <SwiperSlide style={{height:"550px"}}><img src="https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg" alt=""/></SwiperSlide>

            </Swiper>
        </>
    );
}


