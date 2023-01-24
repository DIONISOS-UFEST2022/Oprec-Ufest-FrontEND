// react
import { useRef } from "react";
// styling
import { Box, Heading, Image } from "@chakra-ui/react";
import "./Home.scss";
// child component
import { BgBush, Bush } from "./Bush/bush";
import { Bird } from "./Bird/Bird";
import { HomeButton } from "./HomeButton/HomeButton";
// animation
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from "react";
import { Stepper } from "@material-ui/core";
import styled from 'styled-components';
import { CustomizedSteppersHome } from "./HomeStepper/HomeStepper";
import { useMediaQuery } from "@chakra-ui/react";

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
    return (
        <Box className="home" paddingTop={isMobile ? "20px" : "10vh"}>
            <CustomizedSteppersHome />
            {/* <Bird /> */}
            {/* <BgBush /> */}
            <animated.div onClick={handleClick} style={pilarLeft} className="pilar left"></animated.div>
            <animated.div className="pilar right"></animated.div>
            <AnimatedImg style={{ ...Logoanimate }} height={["100px", "300px", "300px"]} width={["100px", "300px", "300px"]} className="home-image" />
            <Heading className="heading" opacity={0} ref={homeTitleRef}>Welcome Sparta! </Heading>
            <HomeButton />
            <Bush />
        </Box>
    )
}