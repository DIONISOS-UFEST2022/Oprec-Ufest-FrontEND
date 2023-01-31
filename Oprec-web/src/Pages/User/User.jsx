import "./User.scss";
import { useSelector } from 'react-redux';
import { selectPage } from '../../Redux/features/page/pageSlice';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy, useCallback, useRef } from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
// import NavbarUser from "../../Reusable/NavbarUser/Navbar";
const NavbarUser = lazy(() => import("../../Reusable/NavbarUser/Navbar"));
const NavbarMobile = lazy(() => import("../../Reusable/NavbarUser/NavbarMobile/NavbarMobile"));
const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About Us/About"));
const Division = lazy(() => import("./Division/Division"));
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const Join = lazy(() => import("./Join/Join"));


export default function User() {
    const isMobile = useMediaQuery("(max-width: 960px)")
    const page = useSelector(selectPage);

    const HomeCallback = useCallback(() => {
        return <Home />
    }, [])

    const AboutCallback = useCallback(() => {
        return <About />
    }, [])

    const DivisionCallback = useCallback(() => {
        return <Division />
    }, [])


    // 
    // const userRef = useRef(null);
    // function handleWheel(event) {
    //     let currentTargetRect = event.currentTarget.getBoundingClientRect();
    //     const event_offsetX = event.pageX - currentTargetRect.left,
    //         event_offsetY = event.pageY - currentTargetRect.top;
    //     console.log(event_offsetX, event_offsetY);
    //     userRef.current.style.top = event_offsetY + 'px';
    //     userRef.current.style.left = event_offsetX + 'px';
    //     userRef.current.style.animation = 'arrow 1s ease-in-out';
    //     setTimeout(() => {
    //         userRef.current.style.animation = 'none';
    //     }, 0);
    //     //...
    // }

    return (
        <>
            {/* <div ref={userRef} className="slash"></div> */}
            <div id="User-Page">
                <Suspense fallback={<LoadingScreen />}>
                    {isMobile ? <NavbarMobile /> : <NavbarUser />}
                </Suspense>
                {(() => {
                    switch (page) {
                        case 'home':
                            return <Suspense fallback={<LoadingScreen />}><HomeCallback /></Suspense>;
                        case 'about':
                            return <Suspense fallback={<LoadingScreen />}><AboutCallback /></Suspense>;
                        case 'division':
                            return <Suspense fallback={<LoadingScreen />}><DivisionCallback /></Suspense>
                        case 'login':
                            return <Suspense fallback={<LoadingScreen />}><Login /></Suspense>
                        case 'register':
                            return <Suspense fallback={<LoadingScreen />}><Register /></Suspense>
                        case 'join':
                            return <Suspense fallback={<LoadingScreen />}><Join /></Suspense>
                        default:
                            return null;
                    }
                })()}
                <Suspense fallback="">
                    <Footer />
                </Suspense>
            </div>
        </>
    )
}