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
import { Join } from './Join/Join';


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
    const [page, setpage] = useState('home');
    const handleClick = pagestate => {
        setpage(pagestate);
    };
    return (
        <Box className="user">
            <AllContext.Provider value={{ page, setpage }}>
                <Navbar handleClick={handleClick} />
                <SwitchTransition>
                    <FadeTransition key={page}
                        timeout={200}
                    >
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
                                case 'join':
                                    return <Join handleClick={handleClick} />
                                default:
                                    return null;
                            }
                        })()}

                    </FadeTransition>
                </SwitchTransition>
                <Footer />
            </AllContext.Provider>
        </Box>
    )
}