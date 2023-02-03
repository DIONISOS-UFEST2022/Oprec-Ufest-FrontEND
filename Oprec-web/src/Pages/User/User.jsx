import "./User.scss";
import { useSelector } from 'react-redux';
import { selectPage } from '../../Redux/features/page/pageSlice';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy, useCallback, useRef } from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import { Route, Routes } from "react-router-dom";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { Outlet } from "react-router-dom";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import ProtectedRoute from "../../Route/ProtectedRoute";
import ProtectedRoutePath from "../../Route/ProtectedRoutePath";
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
    const HomeCallback = useCallback(() => {
        return <Home />
    }, [])

    const AboutCallback = useCallback(() => {
        return <About />
    }, [])

    const DivisionCallback = useCallback(() => {
        return <Division />
    }, [])



    return (
        <div id="User-Page">
            <Routes>
                <Route path="/" element={<>
                    {isMobile ? <Suspense fallback={<LoadingScreen />}><NavbarMobile /></Suspense> : <Suspense fallback={<LoadingScreen />}><NavbarUser /></Suspense>}
                    <Outlet />
                    <Footer />
                </>}>
                    <Route path="/" element={<Suspense fallback={<LoadingScreen />}><HomeCallback /></Suspense>} />
                    <Route path="home" element={<Suspense fallback={<LoadingScreen />}><HomeCallback /></Suspense>} />
                    <Route path="about" element={<Suspense fallback={<LoadingScreen />}><AboutCallback /></Suspense>} />
                    <Route path="division" element={<Suspense fallback={<LoadingScreen />}><DivisionCallback /></Suspense>} />
                    <Route path="login" element={
                        <ProtectedRoute user={"guest"}>
                            <Suspense fallback={<LoadingScreen />}>
                                <Login />
                            </Suspense>
                        </ProtectedRoute>
                    } />
                    <Route path="register" element={
                        // <ProtectedRoute user={"guest"}>
                        <Suspense fallback={<LoadingScreen />}>
                            <Register />
                        </Suspense>
                        // </ProtectedRoute>
                    } />
                    <Route path="register/verify" element={
                        <ProtectedRoutePath path="/register/verify">
                            <VerifyEmail />
                        </ProtectedRoutePath>
                    } />
                    <Route path="join" element={
                        <ProtectedRoute user={"user"}>
                            <Suspense fallback={<LoadingScreen />}>
                                <Join />
                            </Suspense>
                        </ProtectedRoute>} />
                </Route>
            </Routes>
        </div>
    )
}