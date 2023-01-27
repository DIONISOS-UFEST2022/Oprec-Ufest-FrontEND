import React, { useEffect, useState } from 'react'
import "./NavbarMobile.scss"
// import { animated, useSpring } from '@react-spring/web'
import NavbarMobileMenu from './NavbarMobileMenu'
import { useSelector } from 'react-redux'
import { selectPage } from '../../../Redux/features/page/pageSlice'
import { motion, useAnimation } from 'framer-motion'




// menu
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


export default function NavbarMobile() {
    // redux
    const page = useSelector(selectPage);
    const [open, setopen] = useState(true);
    // animation

    const control = useAnimation();
    const bar1 = useAnimation();
    const bar2 = useAnimation();
    const navanimate = useAnimation();

    useEffect(() => {
        if (open === false) {

            control.start({
                opacity: 0,
                y: "-100vh",
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    when: "afterChildren",

                },
            })
            bar1.start({
                y: -5,
            })
            bar2.start({
                y: 5,
            })
            navanimate.start({
                // y: "0vh",
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                },
            })

        }
        setopen(true);
        console.log(open);
    }, [page])
    return (<>
        <motion.div
            initial={{
                opacity: 0,
                y: "-100vh",
            }}
            animate={control}
            className='NavbarMenu'>

            <NavbarMobileMenu animate={navanimate} />
        </motion.div>
        <motion.button
            id="navbar-mobile-menu-button"
            aria-label='menu-button'
            onClick={() => {
                setopen(!open);
                console.log(open);
                if (open) {
                    control.start({
                        opacity: 1,
                        y: "0vh",
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            when: "beforeChildren",
                        },
                    })
                    bar1.start({
                        y: 0,
                    })
                    bar2.start({
                        y: 0,
                    })
                    navanimate.start({
                        // y: "100vh",
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        },
                    })
                } else {
                    control.start({
                        opacity: 0,
                        y: "-100vh",
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            when: "afterChildren",

                        },
                    })
                    bar1.start({
                        y: -5,
                    })
                    bar2.start({
                        y: 5,
                    })
                    navanimate.start({
                        // y: "0vh",
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        },
                    })
                }

            }

            }
            className='NavbarMobileButton'>
            <motion.div
                className='bar up'
                animate={bar1}
                initial={{
                    y: -5,
                }}
            ></motion.div>
            <motion.div
                animate={bar2}
                className='bar down'
                initial={{
                    y: 5,
                }}
            ></motion.div>
        </motion.button>
        {/* <Box className="LogoMobile" color={'white'} position="fixed" left={"16px"} top="30px" fontWeight={"bold"} fontSize="30px">
            UFEST
        </Box> */}
    </>
    )
}