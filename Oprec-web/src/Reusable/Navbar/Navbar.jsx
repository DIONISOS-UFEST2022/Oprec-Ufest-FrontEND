import "./Navbar.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// icon
import HomeIcon from "./../../Asset/Image/NavbarIcon/home.webp"
import AboutIcon from "./../../Asset/Image/NavbarIcon/about.webp"
import DivisionIcon from "./../../Asset/Image/NavbarIcon/division.webp"



function Navbar(props) {

    const user = useSelector(selectuserRole);
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    return (
        <>
            <Grid container className="NavbarUser">
                <Grid item xs={1}>
                    <div className="GradientText">
                        UFEST
                    </div>
                </Grid>
                <Grid item md={1} lg={6}>
                </Grid>
                {user === "user" ?
                    <Grid item md={2}>
                        <NavbarButton color={page === "join" ? "red" : "white"} Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} />
                    </Grid>
                    : ""}
                <Grid item md={2} lg={1}>
                    <NavbarButton color={page === "home" ? "red" : "white"} src={HomeIcon} Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton color={page === "about" ? "red" : "white"} src={AboutIcon} Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                </Grid>
                <Grid item md={2} lg={1}>
                    <NavbarButton color={page === "division" ? "red" : "white"} src={DivisionIcon} Title={"Division"} onClick={() => { dispatch(pageChanged("division")) }} />
                </Grid>
                {user === "user" ? "" :
                    <Grid item md={2} lg={1}>
                        <NavbarButton color={page === "login" ? "red" : "white"} Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />
                    </Grid>
                }
            </Grid>
        </>

    )
}

export default Navbar