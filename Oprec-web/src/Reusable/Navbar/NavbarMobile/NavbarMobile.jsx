import React, { useEffect, useState, Suspense, lazy } from 'react'
import "./NavbarMobile.scss"
import { useSelector } from 'react-redux'
import { selectPage } from '../../../Redux/features/page/pageSlice'
import { LazyMotion, m, domAnimation, useAnimation } from "framer-motion"
const NavbarMobileMenu = lazy(() => import('./NavbarMobileMenu.jsx'))

// Menu
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
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: "-100vh",
                }}
                animate={control}
                className='NavbarMenu'

            >
                <Suspense fallback={""}>
                    <NavbarMobileMenu animate={navanimate} />
                </Suspense>
            </m.div>
        </LazyMotion>
        <m.button
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
            <m.div
                className='bar up'
                animate={bar1}
                initial={{
                    y: -5,
                }}
            ></m.div>
            <m.div
                animate={bar2}
                className='bar down'
                initial={{
                    y: 5,
                }}
            ></m.div>
        </m.button>
        {/* <Box className="LogoMobile" color={'white'} position="fixed" left={"16px"} top="30px" fontWeight={"bold"} fontSize="30px">
            UFEST
        </Box> */}
    </>
    )
}