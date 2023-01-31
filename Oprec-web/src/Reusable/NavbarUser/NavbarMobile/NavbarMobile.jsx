import { useEffect, useState, Suspense, lazy } from 'react'
import "./NavbarMobile.scss"
import { useSelector } from 'react-redux'
import { selectPage } from '../../../Redux/features/page/pageSlice'
import { LazyMotion, m, domAnimation, useAnimation } from "framer-motion"
const NavbarMobileMenu = lazy(() => import('./NavbarMobileMenu/NavbarMobileMenu.jsx'))


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
                },
            })
            bar1.start({
                y: -5,
            })
            bar2.start({
                y: 5,
            })
            navanimate.start({
                transition: {
                    type: "spring",
                },
            })

        }
        setopen(true);
    }, [page])
    return (<>
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: "-100vh",
                }}
                animate={control}
                className='Navbar-Mobile-Menu-Container'

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
                if (open) {
                    control.start({
                        opacity: 1,
                        y: "0vh",
                        transition: {
                            type: "tween",
                        },
                    })
                    bar1.start({
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        },
                    })
                    bar2.start({
                        y: 0,
                    })
                    navanimate.start({
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
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        },
                    })
                }

            }

            }
            className='Navbar-Mobile-Button'
        >
            <LazyMotion features={domAnimation}>
                <m.div
                    className='bar up'
                    animate={bar1}
                    initial={{
                        y: -5,
                    }}
                ></m.div>
            </LazyMotion>
            <LazyMotion features={domAnimation}>
                <m.div
                    animate={bar2}
                    className='bar down'
                    initial={{
                        y: 5,
                    }}
                ></m.div>
            </LazyMotion>
        </m.button>
    </>
    )
}