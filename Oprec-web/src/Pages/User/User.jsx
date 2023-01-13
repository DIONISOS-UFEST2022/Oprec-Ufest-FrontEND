import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import { Login } from './Login/Login';
import { About } from './About Us/About';
import { Division } from './Division/Division';
import Home from './Home/Home';
import { Navbar } from '../../Reusable/Navbar/Navbar';
import { Footer } from '../../Reusable/Footer/Footer';
import { AllContext } from '../../Reusable/Context/AllContext';
import {
    Transition, SwitchTransition, CSSTransition,

} from 'react-transition-group';
import "./User.scss"
import { Register } from './Login/Register';


function FadeDiv(props) {
    return (
        <Box
            className='fadeBox'
            willChange={"transform, opacity"}
            transition={'0.5s'}
            transform={props.state === "entered" ? "translate(0,0)" : "translate(30%, 0% )"}
            opacity={props.state === "entered" ? 1 : 0}
            display={props.state === "exited" ? "none" : "block"}
        >
            {props.children}
        </Box>
    )
}


const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
        {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
);



export function User() {
    const [page, setpage] = useState('home');
    const handleClick = pagestate => {
        setpage(pagestate);
    };
    return (
        <Box className="user">
            <AllContext.Provider value={{ page, setpage }}>
                <Navbar handleClick={handleClick} />
                <SwitchTransition
                    timeout={250}
                    unmountOnExit
                    mountOnEnter
                >
                    <FadeTransition key={page}>
                        {(() => {
                            switch (page) {
                                case 'home':
                                    return <Home handleClick={handleClick} />;
                                case 'about':
                                    return <About handleClick={handleClick} />;
                                case 'divison':
                                    return <Division handleClick={handleClick} />
                                case 'login':
                                    return <Login handleClick={handleClick} />
                                case 'register':
                                    return <Register handleClick={handleClick} />
                                default:
                                    return null;
                            }
                        })()}
                        <Footer />
                    </FadeTransition>
                </SwitchTransition>
            </AllContext.Provider>
        </Box>
    )
}