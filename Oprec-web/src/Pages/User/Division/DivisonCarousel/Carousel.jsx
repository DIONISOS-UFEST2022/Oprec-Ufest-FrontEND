import React, { lazy, Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss"
import { Pagination, Mousewheel, FreeMode } from "swiper";
import { DivisionData } from "../DivisionData";
import { Modal } from "@mui/material";


function CarouselDetail({ props }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <Modal
            sx={{
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='Modal'>
                <div className='Name'>
                    <span className="Name-Title">{props.name}</span>
                    <span className="Name-subTitle"> ({props.division})</span>
                </div>
                <div className='role'>
                    &ldquo;{(props.role)}&rdquo;
                    <br />
                    &ldquo;{(props.role2)}&rdquo;
                </div>
                <div className='NameDesc'>
                    &ldquo;{props.namedesc}&rdquo;
                </div>
                <br />
                <div className='Jobdesk'>
                    {props.jobdesk}
                </div>
            </div>
        </Modal>
        <div onClick={handleOpen} className="Carousel-Detail">
            <img rel="lazy" decoding="async" src={props.image} className="Carousel-Image" />
        </div>
    </>)
}

export default function DivisonCarousel(props) {
    return (
        <>
            <div id="Carousel">
                <Swiper
                    // direction="horizontal"
                    // slidesPerView={1}
                    // freeMode={true}
                    // pagination={{ clickable: true }}
                    // mousewheel={true}
                    modules={[Pagination, Mousewheel, FreeMode]}
                    slideToClickedSlide={true}
                    direction="horizontal"
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    mousewheel={{
                        enabled: true,
                        sensitivity: 1,
                    }}
                    parallax={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="Carousel-Swiper"
                    swipeHandler={".Carousel-Swiper-Slide"}
                    scrollbar={{
                        el: ".swiper-scrollbar",
                        draggable: true,
                        dragSize: 100,
                    }}

                >
                    {DivisionData.filter((item) => item.image).map((item, index) => {
                        return <SwiperSlide key={item.id} className="Carousel-Swiper-Slide">
                            <CarouselDetail
                                props={item}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </>
    );
}
