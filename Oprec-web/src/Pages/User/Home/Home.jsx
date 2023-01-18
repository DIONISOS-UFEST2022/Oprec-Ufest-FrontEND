import { Box, Heading, Image } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import { Bird } from "./bird/bird";
import "./Home.scss"
import { BgBush, Bush } from "./testbush/bush";
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Button from '@mui/material/Button';
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { selectuserRole } from "../../../Redux/features/users/userRoleSlice";

export default function Home(props) {
    const dispatch = useDispatch();
    const homeTitleRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.add('loaded')
            })
        }, 500);
        setTimeout(() => {
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.add('faded')
            })
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.remove('loaded')
            })
            homeTitleRef.current.style.opacity = 1;
        }, 1000);
    })

    const homeRef = useRef(null);
    const userRole = useSelector(selectuserRole);
    return (
        <Box ref={homeRef} className="home" height={"1000px"}>
            <Bird />
            <BgBush />
            <div className="circle first"></div>
            <Image className="pilar left" />
            <Image className="pilar right" />
            <Image height={["200px", "300px", "400px"]} width={["200px", "300px", "400px"]} className="home-image" />
            <Heading className="heading" opacity={0} ref={homeTitleRef}>Welcome Sparta! </Heading>
            <Button className="joinbtn"
                onClick={() => {
                    if (userRole === "guest") {
                        dispatch(pageChanged("login"));
                    } else {
                        dispatch(pageChanged("join"));
                    }
                }}
            >DAFTAR UFEST!</Button>
            <Bush />
        </Box>
    )
}