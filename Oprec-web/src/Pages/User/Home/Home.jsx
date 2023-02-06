// react
import { Suspense, lazy, useEffect, useState, useMemo, useCallback } from "react";
// styling
import "./Home.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { setCookie } from "react-use-cookie";
import UFESTLOGOWHITE from "./Component/UFESTLOGO/UFESTLOGOWHITE";
import { CounterTesting } from "./Component/UFESTLOGO/Testing";
import { userSoundControl } from "../../../Redux/features/users/userSoundSlice";
import BGM from "../../../Asset/Sound/bgm.mp3";
import useSound from "use-sound";
import { useDispatch, useSelector } from "react-redux";
import { pageLoading } from "../../../Redux/features/users/userSoundSlice";
import { selectPageLoading } from "../../../Redux/features/users/userSoundSlice";
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));
const UFESTLOGO = lazy(() => import("./Component/UFESTLOGO/UFESTLOGO"));
const Pilar = lazy(() => import("./pilar"));



// start from here
export default function Home(props) {
    const [isMobile] = useState(useMediaQuery("(max-width: 700px)"));
    const dispatch = useDispatch();
    let loading = useSelector(selectPageLoading);
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
                    <LazyMotion features={domAnimation}>
                        <m.div
                            rel="preload"
                            loading="lazy"
                            decoding="async"
                            className="home-image"
                        />
                    </LazyMotion>
                    <CounterTesting />
                    <HomeButton />
                </>
                :
                <>
                    <Suspense fallback={""}>
                        <Pilar />
                    </Suspense>
                    <MemoLogo />
                    <CounterTesting />
                    <HomeButton />
                </>
            }
        </div>
    )
}