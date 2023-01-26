// react
import { useRef } from "react";
// styling
import { Box, Heading, Image } from "@chakra-ui/react";
import "./Home.scss";
// child component
import { BgBush, Bush } from "./Component/Bush/bush";
import { Bird } from "./Component/Bird/Bird";
// import { HomeButton } from "./HomeButton/HomeButton";
import { HomeButton } from "./Component/HomeButton/HomeButton";
// animation
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from "react";
import { Stepper } from "@material-ui/core";
import styled from 'styled-components';
import { CustomizedSteppersHome } from "./Component/HomeStepper/HomeStepper";
import { useMediaQuery } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
// import background from "./../../../Asset/Image/Background/Homebg.png"
import Background from "./../../../Asset/Image/Background/Homebg.webp"
import Logo from "./../../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import WelcomeText from "./../../../Asset/Image/NavbarIcon/welcome.webp"

const AnimatedImg = styled(animated(Image))``;

// start from here
export default function Home() {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    // animation
    const Logoanimate = useSpring({
        from: { opacity: 0, transform: "translate3d(0, 70px, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
        willChange: "transform, opacity",

    })
    const [pilarLeft, api] = useSpring(() => ({
        from: { x: 0 }
    }))
    function handleClick() {
        api.start({
            from: { x: 0 },
            to: { x: 100 },
        })
    }

    const homeTitleRef = useRef();
    const { scrollYProgress } = useScroll({
        smooth: true,
    });

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
    }

    return (
        <motion.div
            variants={variants}
        >
            <Box className="home" backgroundImage={Background} paddingTop={isMobile ? "20px" : "10vh"}>
                <CustomizedSteppersHome />
                {/* <Bird /> */}
                <animated.div onClick={handleClick} style={pilarLeft} className="pilar left"></animated.div>
                <animated.div className="pilar right"></animated.div>
                <motion.div
                    style={{
                        position: "absolute",
                        bottom: scrollYProgress,
                    }}
                >
                </motion.div>
                <Image src={Logo} height={["100px", "300px", "400px"]} width={["100px", "300px", "400px"]} className="home-image" />
                {/* <Heading className="heading" opacity={1} ref={homeTitleRef}>Welcome Sparta! </Heading> */}
                <Image className="heading" ref={homeTitleRef} src={WelcomeText} />
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: -100
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: "100",
                        delay: 0.5,
                    }}
                >
                    <HomeButton />
                </motion.div>

            </Box>
        </motion.div>
    )
}