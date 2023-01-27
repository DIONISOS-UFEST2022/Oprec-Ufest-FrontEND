import React, { lazy, Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss"
import { Pagination } from "swiper";



export default function DivisonCarousel() {
    return (
        <div id="Carousel">
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Swiper
                direction="horizontal"
                mousewheelcontrol={true}
                keyboard={{
                    enabled: true,
                    onlyInViewport: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="Carousel-Swiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
            {/* </Suspense> */}
        </div>
    );
}
