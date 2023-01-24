import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import "./NavbarMobile.scss"
import { Box } from '@chakra-ui/react'
import { animated, useSpring } from '@react-spring/web'
import NavbarMobileMenu from './NavbarMobileMenu'
import { useSelector } from 'react-redux'
import { pageChanged } from '../../../Redux/features/page/pageSlice'
import { useDispatch } from 'react-redux'
import { selectPage } from '../../../Redux/features/page/pageSlice'

export function NavbarMobile() {
    // redux
    const page = useSelector(selectPage);
    const [open, setopen] = useState(false);
    // animation
    const [springs, api] = useSpring(() => ({
        from: {
            transform: 'translateY(0%)',
        },
    }))

    const [bar, setbar] = useSpring(() => ({
        from: {
            transform: 'translateY(5px)',
        },
    }))
    const [bar2, setbar2] = useSpring(() => ({
        from: {
            transform: 'translateY(-5px)',
        },
    }))

    const openclick = () => {
        api.start({
            from: {
                transform: 'translateY(0%)',

            },
            to: {
                transform: 'translateY(100%)',
            }
        })
    }
    const openbar = () => {
        setbar.start({
            config: {
                duration: 100,
                delay: 0,
            },
            from: {
                transform: 'translateY(5px)',
            },
            to: {
                transform: 'translateY(0px)',
            },
        })
        setbar2.start({
            config: {
                duration: 100,
                delay: 0,
            },
            from: {
                transform: 'translateY(-5px)',
            },
            to: {
                transform: 'translateY(0px)',
            },
        })
    }

    const closebar = () => {
        setbar.start({
            config: {
                duration: 100,
                delay: 0,
            },
            from: {
                transform: 'translateY(0)',
            },
            to: {
                transform: 'translateY(5px)',
            },
        })
        setbar2.start({
            config: {
                duration: 100,
                delay: 0,
            },
            from: {
                transform: 'translateY(0)',
            },
            to: {
                transform: 'translateY(-5px)',
            },
        })
    }
    const closeclick = () => {
        api.start({
            from: {
                transform: 'translateY(100%)',
            },
            to: {
                transform: 'translateY(0%)',
            },
        })
        setbar.start({
            from: {
                transform: 'translateY(10px)',
            },
            to: {
                transform: 'translateY(0)',
            },
        })
    }

    function handler() {
        setopen(!open);
        if (open === true) {
            openclick();
            openbar();
        }
        else {
            closeclick()
            closebar();
        }
    }

    useEffect(() => {
        if (open === true) {
            openclick();
            openbar();
        }
        else {
            closeclick()
            closebar();
        }
    }, [open])

    useEffect(() => {
        console.log(page);
        console.log(open);
        setopen(false);
    }, [page])

    // redux
    return (<>
        <animated.div style={{ ...springs }} className='NavbarMenu'>
            <NavbarMobileMenu />
        </animated.div>
        <button onClick={() => setopen(!open)} className='NavbarMobileButton'>
            <animated.div style={{ ...bar2 }} className='bar up'></animated.div>
            <animated.div style={{ ...bar }} className='bar down'></animated.div>
        </button>
    </>
    )
}