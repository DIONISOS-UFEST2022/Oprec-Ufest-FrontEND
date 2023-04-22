import "./AboutCardMobile.scss"
// import { useState } from "react";
import { useRef } from "react";
// import { m, useScroll, useTransform, useInView, LazyMotion, domAnimation } from "framer-motion";
import Sparkles from "../../../../Reusable/Animation/Sparkle/Sparkle";
import { useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";

function AboutCardMobile(props, id) {
    // const isMobile = useMediaQuery("(max-width: 700px)");
    return (
        <div className='About-Card-Mobile'>
            <img src={props.logo} className="Image" />
            <div className='Title'>
                <Sparkles>
                    {props.title}
                </Sparkles>
            </div>
            <p className='Desc'>
                <span className="quo">&ldquo;</span>
                {props.desc}
                <span className="quo">&rdquo;</span>
            </p>
        </div>
    )
}

export default AboutCardMobile;