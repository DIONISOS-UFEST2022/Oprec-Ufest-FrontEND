import { Box, Button } from "@chakra-ui/react";
import {
    Grid, GridItem, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/AllContext";
import "./Navbar.scss";



function NavbarButton(props) {
    return (
        <Box color={props.color} className={props.className} as="button" onClick={props.onClick}>{props.Title}</Box>
    )
}

export function Navbar(props) {
    const { page, setpage } = useContext(AllContext);

    return (
        <>
            <Box className="Navbar"
                width={"100%"}
            >
                <NavbarButton color={page === "home" ? "red" : "white"} className="NavbarMenu" Title={"Home"} onClick={() => { props.handleClick('home'); }} />
                <NavbarButton color={page === "about" ? "red" : "white"} className="NavbarMenu" Title={"About"} onClick={() => { props.handleClick('about'); }} />
                <NavbarButton color={page === "divison" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { props.handleClick('divison'); }} />
                <NavbarButton color={page === "login" ? "red" : "white"} className="NavbarMenu" Title={"Login"} onClick={() => { props.handleClick('login'); }} />
            </Box>
            <Box className="NavbarMobile"
                width={"100%"}
            >
                <Popover>
                    <PopoverTrigger>
                        <Button className="NavbarMobileTrigger">=</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box className="NavbarMobileMenu">
                                    <NavbarButton className="MenuItem" Title={"Home"} onClick={() => { props.handleClick('home'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"About"} onClick={() => { props.handleClick('about'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"Division"} onClick={() => { props.handleClick('divison'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"Login"} onClick={() => { props.handleClick('login'); }} />
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

            </Box>
        </>

    )
}