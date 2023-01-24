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
    const btnRef = React.useRef()
    return (
        <>
            {/* This is desktop navbar */}
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
                    <NavbarButton color={page === "home" ? "red" : "white"} Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                </Grid>
                <Grid item xs={1}>
                    <NavbarButton color={page === "about" ? "red" : "white"} Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                </Grid>
                <Grid item xs={1}>
                    <NavbarButton color={page === "division" ? "red" : "white"} Title={"Division"} onClick={() => { dispatch(pageChanged("division")) }} />
                </Grid>
                {user === "user" ? "" :
                    <Grid item xs={1}>
                        <NavbarButton color={page === "login" ? "red" : "white"} Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />
                    </Grid>
                }
                {user === "user" ?
                    <Grid item xs={1}>
                        <Profile />
                    </Grid>
                    : ""}
            </AnimatedGrid>
        </>

    )
}