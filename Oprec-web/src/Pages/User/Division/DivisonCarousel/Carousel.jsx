import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

export const AdvancedCarousel = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
        useSnapCarousel();
    return (
        <>
            <ul
                ref={scrollRef}
                style={{
                    display: 'flex',
                    overflow: 'auto',
                    scrollSnapType: 'x mandatory'
                }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <li
                        style={{
                            backgroundColor: 'aqua',
                            fontSize: '50px',
                            width: '400px',
                            height: '400px',
                            flexShrink: 0,
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // border: '1px solid black',
                            borderRadius: '50%',
                            marginLeft: '10px',
                            marginRight: '10px',
                        }}
                    >
                        Item {i}
                    </li>
                ))}
            </ul>
            <div>
                {activePageIndex + 1} / {pages.length}
            </div>
            <button onClick={() => prev()}>Prev</button>
            <button onClick={() => next()}>Next</button>
            <ol style={{ display: 'flex' }}>
                {pages.map((_, i) => (
                    <li key={i}>
                        <button
                            style={i === activePageIndex ? { opacity: 0.5 } : {}}
                            onClick={() => goTo(i)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
};

