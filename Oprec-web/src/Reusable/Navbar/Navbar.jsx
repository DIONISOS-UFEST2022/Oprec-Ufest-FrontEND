import {
    Box,
    Button,
    Text,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import "./Navbar.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { Profile } from "./Profile";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
// icon
import HomeIcon from "./../../Asset/Image/NavbarIcon/home.webp"
import AboutIcon from "./../../Asset/Image/NavbarIcon/about.webp"
import DivisionIcon from "./../../Asset/Image/NavbarIcon/division.webp"
// import "./../../Asset/Image/NavbarIcon/welcome.webp"
import { Image } from "@chakra-ui/react";

const AnimatedGrid = styled(animated(Grid))``;

export function Navbar(props) {
    // animation
    const navanimate = useSpring({
        from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
        delay: 700,
    })

    const user = useSelector(selectuserRole);
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    return (
        <>
            <AnimatedGrid style={{ ...navanimate }} container className="NavbarUser">
                <Grid item xs={1}>
                    <Box className="GradientText" color={'white'} position="absolute" left={"20px"} top="20px" fontWeight={"bold"} fontSize="20px">
                        UFEST
                    </Box>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                {user === "user" ?
                    <Grid item xs={1}>
                        <NavbarButton color={page === "join" ? "red" : "white"} Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} />
                    </Grid>
                    : ""}
                <Grid item xs={1}>
                    <NavbarButton color={page === "home" ? "red" : "white"} src={HomeIcon} Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                </Grid>
                <Grid item xs={1}>
                    <NavbarButton color={page === "about" ? "red" : "white"} src={AboutIcon} Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                </Grid>
                <Grid item xs={1}>
                    <NavbarButton color={page === "division" ? "red" : "white"} src={DivisionIcon} Title={"Division"} onClick={() => { dispatch(pageChanged("division")) }} />
                </Grid>
                {/* {user === "user" ? "" :
                    <Grid item xs={1}>
                        <NavbarButton color={page === "login" ? "red" : "white"} Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />
                    </Grid>
                } */}
                {user === "user" ?
                    <Grid item xs={1}>
                        <Profile />
                    </Grid>
                    : ""}
            </AnimatedGrid>
        </>

    )
}