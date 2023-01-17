import { Box, Button } from "@chakra-ui/react";
import {
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { Profile } from "./Profile";


function NavbarButton(props) {
    return (
        <Box color={props.color} className={props.className} as="button" onClick={props.onClick}>{props.Title}</Box>
    )
}

export function Navbar(props) {
    const user = useSelector(selectuserRole);
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    function Xhandle(x) {
        document.getElementsByClassName("container")[0].classList.toggle("change");
        document.getElementsByClassName("menuMobile")[0].classList.toggle("active");
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            {/* This is desktop navbar */}
            <Box className="Navbar">
                {user === "user" ? <NavbarButton color={page === "join" ? "red" : "white"} className="NavbarMenu" Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} /> : ""}
                <NavbarButton color={page === "home" ? "red" : "white"} className="NavbarMenu" Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                <NavbarButton color={page === "about" ? "red" : "white"} className="NavbarMenu" Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                <NavbarButton color={page === "divison" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { dispatch(pageChanged("divison")) }} />
                {user === "user" ? "" : <NavbarButton color={page === "login" ? "red" : "white"} className="NavbarMenu" Title={"Login"} onClick={() => {dispatch(pageChanged("login")) }} />}
                {user === "user" ? <Profile /> : ""}
            </Box>

            {/* This is mobile navbar */}
            <Box className="NavbarMobile">
                <Button ref={btnRef} className="NavbarMobileButton container" onClick={onOpen}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            CLOSE
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    )
}