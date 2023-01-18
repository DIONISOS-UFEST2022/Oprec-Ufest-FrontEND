// import { Button } from '@mui/material';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "./Carousel.scss";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Center } from '@chakra-ui/react';


export const AdvancedCarousel = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
        useSnapCarousel();
    const horizontalScroll = (e) => {
        console.log(e.target);
        e.target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

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
                    onMouseOver={horizontalScroll}
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
            {/* <div>
                {activePageIndex + 1} / {pages.length}
            </div> */}
            {/* 
            <Button onClick={() => prev()}>Prev</Button>
            <Button onClick={() => next()}>Next</Button> */}
            <Center>
                <div style={{ display: 'flex' }}>
                    {pages.map((_, i) => (
                        <div key={i}>
                            <Button className='CarouselDotNav'
                                style={i === activePageIndex ? { opacity: 0.5 } : {}}
                                onClick={() => goTo(i)}
                            >
                                {/* {i + 1} */}
                            </Button>
                        </div>
                    ))}
                </div>
            </Center>
        </>
    );
};

