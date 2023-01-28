import "./User.scss";
import { useSelector } from 'react-redux';
import { selectPage } from '../../Redux/features/page/pageSlice';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy } from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
const Navbar = lazy(() => import("../../Reusable/Navbar/Navbar"));
const NavbarMobile = lazy(() => import("../../Reusable/Navbar/NavbarMobile/NavbarMobile"));
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
    return (
        <div id="User-Page">
            <Suspense fallback={<LoadingScreen />}>
                {isMobile ? <NavbarMobile /> : <Navbar />}
            </Suspense>
            {(() => {
                switch (page) {
                    case 'home':
                        return <Suspense fallback={<LoadingScreen />}><Home /></Suspense>;
                    case 'about':
                        return <Suspense fallback={<LoadingScreen />}><About /></Suspense>;
                    case 'division':
                        return <Suspense fallback={<LoadingScreen />}><Division /></Suspense>
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
    )
}