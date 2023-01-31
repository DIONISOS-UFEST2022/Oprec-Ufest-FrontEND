// react
import { Suspense, lazy, useEffect, useState, useMemo, useCallback } from "react";
// styling
import "./Home.scss";
// import { LazyMotion, m, domAnimation } from "framer-motion"
// import WelcomeAnimate from "./Component/WelcomeAnimate/WelcomeAnimate";
// import { useMediaQuery } from "@material-ui/core";
// import UFESTLOGO from "./Component/UFESTLOGO/UFESTLOGO";
import { useMediaQuery } from "@mui/material";
import WelcomeAnimate from "./Component/WelcomeAnimate/WelcomeAnimate";
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));
const UFESTLOGO = lazy(() => import("./Component/UFESTLOGO/UFESTLOGO"));
const Pilar = lazy(() => import("./pilar"));


// start from here
export default function Home() {
    const [isMobile] = useState(useMediaQuery("(max-width: 600px)"));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const MemoLogo = useCallback(() => {
        return <UFESTLOGO />
    }, [])
    return (
        <div className="home">
            {isMobile ?
                <>
                    <div
                        rel="preload"
                        loading="lazy"
                        decoding="async"
                        className="home-image"
                    />
                    {/* <MemoLogo /> */}
                    <p className="heading">Welcome #Spartan</p>
                    <HomeButton />
                </>
                :
                <>
                    <Suspense fallback={""}>
                        <Pilar />
                    </Suspense>
                    <MemoLogo />

                    <WelcomeAnimate />
                    <HomeButton />
                </>
            }
        </div>
    )
}