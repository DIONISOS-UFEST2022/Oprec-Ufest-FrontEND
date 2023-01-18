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



function FadeDiv(props) {
    return (
        <Box
            className='fadeBox'
            willChange={"transform, opacity"}
            transition={'0.5s'}
            transform={props.state === "entered" ? "translate(0,0)" : "translate(30%, 0% )"}
            opacity={props.state === "entered" ? 1 : 0}
            display={props.state === "exited" ? "none" : "block"}
            timeout={props.timeout}
        >
            {props.children}
        </Box>
    )
}


const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
        {state => <FadeDiv timeout={500} state={state}>{children}</FadeDiv>}
    </Transition>
);



export function User() {
    const page = useSelector(selectPage);
    return (
        <Box position={'relative'} className="user">
            <Navbar />
            <SwitchTransition>
                <FadeTransition key={page}
                    timeout={200}
                >
                    {(() => {
                        switch (page) {
                            case 'home':
                                return <Home />;
                            case 'about':
                                return <About />;
                            case 'divison':
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

                </FadeTransition>
            </SwitchTransition>
            <Footer />
        </Box>
    )
}