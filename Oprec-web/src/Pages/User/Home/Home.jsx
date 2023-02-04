// react
import { Suspense, lazy, useEffect, useState, useMemo, useCallback } from "react";
// styling
import "./Home.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import WelcomeAnimate from "./Component/WelcomeAnimate/WelcomeAnimate";
import { setCookie } from "react-use-cookie";
import UFESTLOGOWHITE from "./Component/UFESTLOGO/UFESTLOGOWHITE";
import { CounterTesting } from "./Component/UFESTLOGO/Testing";
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));
const UFESTLOGO = lazy(() => import("./Component/UFESTLOGO/UFESTLOGO"));
const Pilar = lazy(() => import("./pilar"));


// start from here
export default function Home() {
    const [isMobile] = useState(useMediaQuery("(max-width: 600px)"));
    useEffect(() => {
        setCookie('home', 'home', { path: '/' });
        window.scrollTo(0, 0)
    }, []);
    const MemoLogo = useCallback(() => {
        return <UFESTLOGO />
    }, [])
    return (
        <div className="home">
            {isMobile ?
                <>
                    {/* <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            animate={{
                                opacity: 1,
                                y: -1,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            rel="preload"
                            loading="lazy"
                            decoding="async"
                            className="home-image"
                        />
                    </LazyMotion> */}
                    {/* <MemoLogo /> */}
                    <CounterTesting />
                    {/* <p className="heading">Welcome #Spartan</p> */}
                    {/* <HomeButton /> */}
                </>
                :
                <>
                    <Suspense fallback={""}>
                        <Pilar />
                    </Suspense>
                    <MemoLogo />
                    <CounterTesting />
                    {/* <WelcomeAnimate /> */}
                    {/* <HomeButton /> */}
                </>
            }
        </div>
    )
}