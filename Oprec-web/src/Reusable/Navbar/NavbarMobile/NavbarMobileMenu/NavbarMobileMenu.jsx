import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { pageChanged } from '../../../../Redux/features/page/pageSlice'
import { m, useInView, LazyMotion, domAnimation } from 'framer-motion';
import { selectuserRole } from '../../../../Redux/features/users/userRoleSlice'
import { NavbarMobileMenuList as Menus } from './NavbarMobileMenuList'

function Card(props) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <Grid style={{
            transform: isInView ? "" : "translateY(-30px)",
            opacity: isInView ? 1 : 0,
            transition: "0.3s",
            transitionDelay: isInView ? "0.5s" : "0s"
        }}
            item xs={12}
            className="Navbar-Mobile-Menu-Card"

        >
            <div ref={ref} onClick={props.onClick} onTouchEnd={props.onTouch} className='title'>
                {props.name}
            </div>
        </Grid >
    )
}

export default function NavbarMobileMenu(props) {
    const dispatch = useDispatch();
    const roleselector = useSelector(selectuserRole);
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={props.animate}
            >
                <Grid container className='Navbar-Mobile-Menu'>
                    {
                        Menus.filter(
                            (item) => {
                                if (roleselector === 'guest') {
                                    return item.name !== 'Join';
                                } else if (roleselector === 'user') {
                                    return item.state !== 'Login' && item.state !== 'Register';
                                } else if (roleselector === 'admin') {
                                    return item.state !== 'Login' && item.state !== 'Register';
                                }
                            }
                        ).map((item, index) => {
                            return (
                                <Card onTouch={
                                    () => {
                                        dispatch(pageChanged(item.state))
                                    }} key={index} name={item.name} link={item.link} onClick={props.onClick} />
                            )
                        })}
                </Grid>
            </m.div>
        </LazyMotion>
    )
}
