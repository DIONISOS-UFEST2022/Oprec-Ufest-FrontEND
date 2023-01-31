import "./Navbar.scss";
import React, { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Button, Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// Audio
import Profile from "./Profile/Profile";
import Sparkles from "../Animation/Sparkle/Sparkle";
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
    const user = useSelector(selectuserRole);
    return (
        <>
            <Grid container className="NavbarUser">
                <Grid item xs={4} >
                    <div className="GradientText">
                        <Sparkles>
                            UMN FESTIVAL
                        </Sparkles>
                    </div>
                </Grid>
                {/* <Grid item xs={1} lg={'auto'}>
                    <Suspense fallback="">
                        <AudioPlayButton />
                    </Suspense>
                </Grid> */}
                <Grid item md={2} lg={4}></Grid>
                {user === "user" ?
                    <Grid item md={1}>
                        <NavbarButton state="join" Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} />
                    </Grid>
                    : ""}
                <Grid item md={2} lg={1}>
                    <NavbarButton state="home" Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton state="about" Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton state="division" Title={"Division"} onClick={() => { dispatch(pageChanged("division")) }} />
                </Grid>
                {user === "user" ? "" :
                    <Grid item md={2} lg={1}>
                        <NavbarButton state="login" Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />
                    </Grid>
                }

                {user === "user" ?
                    // <Grid item md={2} lg={'auto'}>
                    //     <Profile>
                    //         {/* <Button variant="contained" onClick={asyncLogout}>Log Out</Button> */}
                    //         <NavbarButton Title={"Log Out"} onClick={asyncLogout} />
                    //     </Profile>
                    // </Grid>
                    ""
                    : ""
                }

            </Grid>
        </>

    )
}
