// react
import { Suspense, lazy } from "react";
// styling
import "./Home.scss";
// animation
import { useScroll } from "framer-motion";

// import lazy
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));


// start from here
export default function Home() {
    // animation
    const { scrollYProgress } = useScroll({
        smooth: true,
    });

    return (
        <div className="home">
            <div rel="preload" decoding="async" className="pilar left" />
            <div rel="preload" decoding="async" className="pilar right" />
            <div
                rel="preload"
                loading="lazy"
                decoding="async"
                className="home-image"
            />
            <p className="heading">Welcome #Spartan</p>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeButton />
            </Suspense>
        </div>
    )
}