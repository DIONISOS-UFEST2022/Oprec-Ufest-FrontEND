import React from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { pageChanged } from '../../../../Redux/features/page/pageSlice'
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { selectuserRole } from '../../../../Redux/features/users/userRoleSlice'
import { NavbarMobileMenuList as Menus } from './NavbarMobileMenuList'

function Card(props) {
    return (
        <Grid item
            xs={12}
            className="Navbar-Mobile-Menu-Card"
        >
            <button onTouchStartCapture={props.onTouch} className='Navbar-Menu-Button'>
                {props.name}
            </button>
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
