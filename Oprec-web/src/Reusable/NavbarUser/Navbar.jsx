import "./Navbar.scss";
import React, { lazy, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// use Cookie
// Audio
import Profile from "./Profile/Profile";
import Sparkles from "../Animation/Sparkle/Sparkle";
import { setCookie } from "react-use-cookie";
import { getRequest } from "../Service/AxiosClient";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";
import { domAnimation, m, LazyMotion, AnimatePresence } from "framer-motion";
const AudioPlayButton = lazy(() => import("../../Pages/User/Home/Component/AudioPlayButton/AudioPlayButton"));

export default function NavbarUser(props) {
    const dispatch = useDispatch();
    const asyncLogout = async () => {
        const logout = await getRequest("logout");
        console.log(logout);
        if (logout.data.success === true) {
            localStorage.removeItem('LoginID');
            dispatch(pageChanged('login'));
            dispatch(userRoleAdded('guest'));
        }
    }
    const userRole = useSelector(selectuserRole);
    const user = useSelector(selectuserRole);
    return (
        <>
            <LazyMotion features={domAnimation}>
                <m.div
                >
                    <Grid container className="NavbarUser" justifyContent="flex-start">
                        <Grid item xs={2} sm={2} md={3} lg={2}
                            style={{ display: "flex", justifyContent: "flex-start" }}
                        >
                            <div className="GradientText"
                                style={{
                                    transform: "translateY(-5px)",
                                }}
                            >
                                <Sparkles>
                                    UMN FESTIVAL 2023
                                </Sparkles>
                            </div>
                        </Grid>


                        <Grid item xs={1} sm={1} md={4} lg={userRole === 'user' ? 5 : 6} xl={5}
                            style={{ display: "flex", justifyContent: "flex-start" }}
                            className="center"
                        >
                            <AudioPlayButton />
                        </Grid>
                        {/* <Grid item xs={1} lg={'auto'}>
                    <Suspense fallback="">
                        <AudioPlayButton />
                    </Suspense>
                </Grid> */}
                        <Grid item md={1} lg={'auto'} xl={'auto'}></Grid>
                        {user === "user" ?
                            <Grid item md={1}>
                                <NavbarButton state="join" Title={"JOIN US!"} />
                            </Grid>
                            : ""}
                        <Grid item md={1} lg={1}>
                            <NavbarButton state="home" Title={"Home"} onClick={
                                () => {
                                    dispatch(pageChanged("home"))
                                    setCookie('home', 'home', { path: '/' });
                                }} />
                        </Grid>
                        <Grid item md={1} lg={1}>
                            <NavbarButton state="about" Title={"About"} onClick={
                                () => {
                                    dispatch(pageChanged("about"))
                                    setCookie('about', 'about', { path: '/' });
                                }
                            } />
                        </Grid>
                        <Grid item md={1} lg={1}>
                            <NavbarButton state="division" Title={"Division"} onClick={() => {
                                dispatch(pageChanged("division"));
                                setCookie('division', 'division', { path: '/' });
                            }} />
                        </Grid>
                        {user === "user" ? "" :
                            <Grid item md={1} lg={1}>
                                <NavbarButton state="login" Title={"Login"} onClick={() => {
                                    dispatch(pageChanged("login"));
                                    dispatch(pageChanged("login"));
                                }} />
                            </Grid>
                        }
                        {/* <Grid item md={1} lg={0}>
                </Grid> */}

                        {user === "user" ?
                            <Grid item md={1} lg={1}>
                                <Profile>
                                    <NavbarButton Title={"Log Out"} onClick={asyncLogout} />
                                </Profile>
                            </Grid>

                            : ""
                        }
                    </Grid>
                </m.div>
            </LazyMotion>
        </>

    )
}
