import React, { useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import "./NavbarMobile.scss"
// ref
// redux
import { useSelector, useDispatch } from 'react-redux'
import { pageChanged } from '../../../Redux/features/page/pageSlice'
import { m, useInView } from 'framer-motion';

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
            <div onClick={props.onClick} onTouchEnd={props.onTouch} className='title'>
                {props.name}
            </div>
        </Grid >
    )
}

export default function NavbarMobileMenu(props) {
    const dispatch = useDispatch();
    return (
        <m.div
            animate={props.animate}
        >
            <Grid container className='NavbarMobileMenu'>
                {Menu.map((item, index) => {
                    return (
                        <Card onTouch={
                            () => {
                                dispatch(pageChanged(item.state))
                            }} key={index} name={item.name} link={item.link} onClick={props.onClick} />
                    )
                })}
            </Grid>
        </m.div>
    )
}

// export default NavbarMobileMenu