import "./AboutCardMobile.scss"
// import { useState } from "react";
import { useRef } from "react";
import { m, useScroll, useTransform, useInView, LazyMotion, domAnimation } from "framer-motion";
import Sparkles from "../../../../Reusable/Animation/Sparkle/Sparkle";
import { useMediaQuery } from "@mui/material";

function AboutCardMobile(props, id) {
    const isMobile = useMediaQuery("(max-width: 700px)");
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <LazyMotion features={domAnimation}>
                <m.div
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    ref={ref}
                    className='About-Card-Mobile'>
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
                </m.div>
            </LazyMotion>
        </>
    )
}

export default AboutCardMobile;