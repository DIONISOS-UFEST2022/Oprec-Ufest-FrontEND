import "./Navbar.scss";
import React, { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
// import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// icon
import HomeIcon from "./../../Asset/Image/NavbarIcon/home.webp"
import AboutIcon from "./../../Asset/Image/NavbarIcon/about.webp"
import DivisionIcon from "./../../Asset/Image/NavbarIcon/division.webp"
import logouthandler from "./LogoutHandler/LogoutHandler";
// Audio
import { URL } from "../Service/URL";
import axios from "axios";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";

const AudioPlayButton = lazy(() => import("../../Pages/User/Home/Component/AudioPlayButton/AudioPlayButton"));


function Navbar(props) {
    const dispatch = useDispatch();
    function Logout() {

        const login = localStorage.getItem('LoginID');
        axios.get(`${URL}/api/logout`, {
            headers:
                { Authorization: `Bearer ${login}` }
        })
            .then((res) => {
                localStorage.removeItem('LoginID');
                dispatch(pageChanged('login'));
                dispatch(userRoleAdded('guest'));

            }
            )
            .catch((err) => {
                console.error(err);
            }
            );
    }

    const user = useSelector(selectuserRole);
    return (
        <>
            <Grid container className="NavbarUser">
                <Grid item xs={1}>
                    <div className="GradientText">
                        UFEST 2023
                    </div>
                </Grid>
                <Grid item md={'auto'} lg={'auto'}>
                    <Suspense fallback="">
                        <AudioPlayButton />
                    </Suspense>
                </Grid>
                <Grid item md={2} lg={4}></Grid>
                {user === "user" ?
                    <Grid item md={1}>
                        <NavbarButton Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} />
                    </Grid>
                    : ""}
                <Grid item md={2} lg={1}>
                    <NavbarButton src={HomeIcon} Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton src={AboutIcon} Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton src={DivisionIcon} Title={"Division"} onClick={() => { dispatch(pageChanged("division")) }} />
                </Grid>
                {user === "user" ? "" :
                    <Grid item md={2} lg={1}>
                        <NavbarButton Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />
                    </Grid>
                }
                {user === "user" ?
                    <Grid item md={2} lg={1}>
                        <NavbarButton Title={"Log Out"} onClick={() => { Logout() }} />
                    </Grid>
                    : ""
                }
            </Grid>
        </>

    )
}

export default Navbar