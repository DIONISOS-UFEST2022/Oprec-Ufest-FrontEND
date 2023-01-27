// react
import { Suspense, lazy, useEffect } from "react";
// styling
import "./Home.scss";
import { LazyMotion, m, domAnimation } from "framer-motion"
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));


// start from here
export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="home">
            <Suspense fallback={""}>
                <div rel="preload" decoding="async" className="pilar left" />
                <div rel="preload" decoding="async" className="pilar right" />
            </Suspense>
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{
                        opacity: 0,
                        // y: -400
                    }}
                    animate={{
                        opacity: 2,
                        // y: 0,
                        transition: {
                            duration: 1,
                        }
                    }}
                >
                    <Suspense fallback={""}>

                        <div
                            rel="preload"
                            loading="lazy"
                            decoding="async"
                            className="home-image"
                        />
                    </Suspense>
                </m.div>
            </LazyMotion>

            <p className="heading">Welcome #Spartan</p>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <HomeButton />
                </m.div>
            </LazyMotion>
            {/* <HomeButton /> */}
            {/* </Suspense> */}
        </div>
    )
}