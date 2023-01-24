import React, { useContext, useState } from 'react';
import { Box } from "@chakra-ui/react"
import { Login } from './Login/Login';
import { About } from './About Us/About';
import { Division } from './Division/Division';
import Home from './Home/Home';
import { Navbar } from '../../Reusable/Navbar/Navbar';
import { Footer } from '../../Reusable/Footer/Footer';
import {
    Transition, SwitchTransition, CSSTransition,

} from 'react-transition-group';
import "./User.scss"
import { Register } from './Register/Register';
import { Join } from './Join/Join';
import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../../Redux/features/page/pageSlice';
import { useMediaQuery } from '@chakra-ui/react';
import { NavbarMobile } from '../../Reusable/Navbar/NavbarMobile/NavbarMobile';


export function User() {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const page = useSelector(selectPage);
    return (
        <Box position={'relative'} className="user">
            {isMobile ? <NavbarMobile /> : <Navbar />}
            {(() => {
                switch (page) {
                    case 'home':
                        return <Home />;
                    case 'about':
                        return <About />;
                    case 'division':
                        return <Division />
                    case 'login':
                        return <Login />
                    case 'register':
                        return <Register />
                    case 'join':
                        return <Join />
                    default:
                        return null;
                }
            })()}
            <Footer />
        </Box>
    )
}