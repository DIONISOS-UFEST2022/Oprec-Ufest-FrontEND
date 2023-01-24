import React from 'react'
import { Grid } from '@material-ui/core'
import { Center } from '@chakra-ui/react'
import "./NavbarMobile.scss"
import { animated, useSpring } from '@react-spring/web'
// ref
import { useRef } from "react";
import { useInView } from "framer-motion";
// redux
import { useSelector, useDispatch } from 'react-redux'
import { pageChanged } from '../../../Redux/features/page/pageSlice'


const Menu = [
    {
        name: 'Home',
        link: '/',
        state: 'home',
    },
    {
        name: 'About',
        link: '/about',
        state: 'about',
    },
    {
        name: 'Division',
        link: '/division',
        state: 'division',
    },
    {
        name: 'Join',
        link: '/join',
        state: 'join',
    },
    {
        name: 'Login',
        link: '/login',
        state: 'login',
    },
    {
        name: 'Register',
        link: '/register',
        state: 'register',
    },
]


function Card(props) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <Grid style={{
            transform: isInView ? "none" : "translateY(-30px)",
            opacity: isInView ? 1 : 0,
            transition: "0.5s",
            transitionDelay: "0.5s"
        }}
            item xs={12}
            className="NavbarMobileMenuCard"
            ref={ref}
        >
            <Center onTouchEnd={props.onTouch} className='title'>
                {props.name}
            </Center>
        </Grid >
    )
}

export function NavbarMobileMenu(props) {
    const navanimate = useSpring({
        from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
        delay: 1700,
    })

    // redux
    const dispatch = useDispatch()
    return (
        <animated.div style={{ ...navanimate }}>
            <Grid container className='NavbarMobileMenu'>
                {Menu.map((item, index) => {
                    return (
                        <Card onTouch={() => dispatch(pageChanged(item.state))} key={index} name={item.name} link={item.link} />
                    )
                })}
            </Grid>
        </animated.div>
    )
}

export default NavbarMobileMenu