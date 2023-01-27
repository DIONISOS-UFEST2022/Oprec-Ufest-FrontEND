import "./User.scss";
import { useSelector } from 'react-redux';
import { selectPage } from '../../Redux/features/page/pageSlice';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy } from "react";
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
    const isMobile = useMediaQuery("(max-width: 768px)")
    const page = useSelector(selectPage);
    return (
        <div className="user">
            <Suspense fallback="Loading...">
                {isMobile ? <NavbarMobile /> : <Navbar />}
            </Suspense>
            {(() => {
                switch (page) {
                    case 'home':
                        return <Home />;
                    case 'about':
                        return <About />;
                    case 'division':
                        return <Division />
                    case 'login':
                        return <Login />
                    case 'register':
                        return <Register />
                    case 'join':
                        return <Join />
                    default:
                        return null;
                }
            })()}
            <Suspense fallback="Loading...">
                <Footer />
            </Suspense>
        </div>
    )
}