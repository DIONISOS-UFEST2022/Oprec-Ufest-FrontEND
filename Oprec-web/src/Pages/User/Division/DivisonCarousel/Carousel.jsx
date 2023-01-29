import React, { lazy, Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss"
import { Pagination } from "swiper";
import { DivisionData } from "../DivisionData";


export default function DivisonCarousel() {
    return (
        <div id="Carousel">
            <Swiper
                direction="horizontal"
                keyboard={{
                    enabled: true,
                    onlyInViewport: false,
                }}
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="Carousel-Swiper"
            >
                {DivisionData.filter((item) => item.image).map((item, index) => {
                    return <SwiperSlide className="Carousel-Swiper-Slide">
                        <img rel="lazy" decoding="async" src={item.image} className="Carousel-Image" />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}
