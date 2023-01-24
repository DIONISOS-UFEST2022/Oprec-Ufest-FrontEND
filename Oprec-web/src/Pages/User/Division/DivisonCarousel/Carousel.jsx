import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@material-ui/core";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss"


// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export function AdvancedCarousel() {
    return (
        <Box id="Carousel">
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
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Box>
    );
}
