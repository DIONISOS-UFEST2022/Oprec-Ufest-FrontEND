import { Box, Button } from "@chakra-ui/react";
import {
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
            <Box className="NavbarUser">
                {user === "user" ? <NavbarButton color={page === "join" ? "red" : "white"} Title={"JOIN US!"} onClick={() => { dispatch(pageChanged("join")) }} /> : ""}
                <NavbarButton color={page === "home" ? "red" : "white"} Title={"Home"} onClick={() => { dispatch(pageChanged("home")) }} />
                <NavbarButton color={page === "about" ? "red" : "white"} Title={"About"} onClick={() => { dispatch(pageChanged("about")) }} />
                <NavbarButton color={page === "divison" ? "red" : "white"} Title={"Division"} onClick={() => { dispatch(pageChanged("divison")) }} />
                {user === "user" ? "" : <NavbarButton color={page === "login" ? "red" : "white"} Title={"Login"} onClick={() => { dispatch(pageChanged("login")) }} />}
                {user === "user" ? <Profile /> : ""}
            </Box>
        </>

    )
}