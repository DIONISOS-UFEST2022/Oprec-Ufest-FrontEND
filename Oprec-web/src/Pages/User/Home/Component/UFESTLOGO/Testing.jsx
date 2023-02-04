import React from 'react'
import "./Testing.scss"

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
        x: 200 * gap,
    },
    {
        letter: "t",
        x: 213 * gap,
    },
    {
        letter: "a",
        x: 224 * gap,
    },
]
const useAnimationFrame = callback => {
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
}

export const CounterTesting = () => {
    const [count, setCount] = React.useState(0)

    useAnimationFrame(deltaTime => {
        setCount(prevCount => (prevCount + deltaTime * 0.01) % 10)
    })
    const [x, setX] = React.useState(0)
    const text = word.map((letter, index) => {
        return <text
            key={index}
            className='text-path1'
            fontFamily='Rocket-Vintage'
            x={letter.x}
            y="100"
            fill="#f5d63f"
            opacity={1}
            stroke="none"
            font-size="70"
            fontWeight={"1000"}
        >
            {letter.letter}
        </text>
    })
    return <div
        className='counter'>
        <svg className='svgtest'
        >
            {text}

        </svg>
        <svg height="0" width="0">
            <filter
                id='shadow'
                colorinterpolation-filters="sRGB"
            >
                <feDropShadow
                    dx="2"
                    dy="2"
                    stdDeviation="3"
                    floodOpacity="0.5"
                />
            </filter>
        </svg>
    </div>

}