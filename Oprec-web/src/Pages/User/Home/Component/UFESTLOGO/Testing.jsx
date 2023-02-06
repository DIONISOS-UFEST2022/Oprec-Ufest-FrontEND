import React from 'react'
import Sparkles from '../../../../../Reusable/Animation/Sparkle/Sparkle';
import "./Testing.scss"
// import { useDispatch, useSelector } from 'react-redux';
// import { mouseMoved } from '../../../../../Redux/features/page/pageSlice';
// import { selectMouse } from '../../../../../Redux/features/page/pageSlice';
// import { useAnimationFrame } from '../../../../../Reusable/Function/useAnimationFrame';
// import { motion } from 'framer-motion';

const gap = 1.7;

const word = [
    {
        letter: "W",
        x: 0,
    },
    {
        letter: "e",
        x: 30 * gap,
    },
    {
        letter: "l",
        x: 44 * gap,
    },
    {
        letter: "c",
        x: 57 * gap,
    },
    {
        letter: "o",
        x: 71 * gap,
    },
    {
        letter: "m",
        x: 87 * gap,
    },
    {
        letter: "e",
        x: 106 * gap,
    },
    {
        letter: " ",
        x: 124 * gap,
    },
    {
        letter: "#",
        x: 134 * gap,
    },
    {
        letter: "S",
        x: 158 * gap,
    },
    {
        letter: "p",
        x: 175 * gap,
    },
    {
        letter: "a",
        x: 186 * gap,
    },
    {
        letter: "r",
        x: 202 * gap,
    },
    {
        letter: "t",
        x: 216 * gap,
    },
    {
        letter: "a",
        x: 226 * gap,
    },
]

export const CounterTesting = () => {
    const [x, setX] = React.useState(0)
    const text = word.map((letter, index) => {
        return <text
            key={index}
            className='text-path1'
            fontFamily='Rocket-Vintage'
            x={letter.x}
            y="100"
            // fill="#f5d63f"
            fill="url(#rainbow)"
            opacity={1}
            stroke="none"
            fontSize="70"
            fontWeight={"1000"}
        >
            {letter.letter}
        </text>
    })
    return (<>
        <div
            className='counter'>

            <svg className='svgtest'
            >

                <defs>
                    <linearGradient
                        id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#b07215" offset="0%" />
                        <stop stop-color="#f5d63f" offset="5%" />
                        <stop stop-color="#fff1ad" offset="20%" />
                        <stop stop-color="#f5d63f" offset="35%" />
                        <stop stop-color="#f5ac3f" offset="50%" />
                        {/*  */}
                        <stop stop-color="#f5ac3f" offset="65%" />
                        <stop stop-color="#f5d63f" offset="70%" />
                        <stop stop-color="#fff1ad" offset="80%" />
                        <stop stop-color="#f5d63f" offset="95%" />
                        <stop stop-color="#f5ac3f" offset="100%" />
                        {/* <stop stop-color="" offset="100%" /> */}
                    </linearGradient>
                </defs>
                {text}
            </svg>
        </div>
    </>)
}