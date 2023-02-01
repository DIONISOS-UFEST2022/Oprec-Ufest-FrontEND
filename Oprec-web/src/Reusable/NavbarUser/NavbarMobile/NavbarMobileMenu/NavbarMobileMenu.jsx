import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { pageChanged } from '../../../../Redux/features/page/pageSlice'
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { selectuserRole } from '../../../../Redux/features/users/userRoleSlice'
import { NavbarMobileMenuList as Menus } from './NavbarMobileMenuList'
import { selectPage } from '../../../../Redux/features/page/pageSlice';


function Card(props) {
    const page = useSelector(selectPage);
    return (
        <Grid item
            xs={12}
            className="Navbar-Mobile-Menu-Card"
        >

            <button
                // style={{
                //     border:
                //         props.state === page ? "1px solid #f5d63f" : "1px solid #00000000"
                //     ,
                // }}
                onTouchStartCapture={props.onTouch} className='Navbar-Menu-Button'>
                {props.name}
                {props.state === page ?
                    <div className="ActiveLine">
                        <svg
                            width="78"
                            height="5"
                            viewBox="0 0 58 5" fill="none">
                            <path className="path" d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
                                stroke="#f5d63f"
                                strokeWidth="3"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></div>
                    : ""}
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
                                    }} key={index} name={item.name} link={item.link} onClick={props.onClick} state={item.state} />
                            )
                        })}
                </Grid>
            </m.div>
        </LazyMotion>
    )
}
