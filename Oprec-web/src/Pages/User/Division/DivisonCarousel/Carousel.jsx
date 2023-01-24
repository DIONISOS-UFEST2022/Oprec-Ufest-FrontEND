// import { Button } from '@mui/material';
import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "./Carousel.scss";
import { Center } from '@chakra-ui/react';
import CarouselDetail from './CarouselDetail/CarouselDetail';


export const AdvancedCarousel = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
        useSnapCarousel();

    return (
        <>
            <Box
                className='CarouselContainer keep-scrolling'
                ref={scrollRef}
            // onMouseOver={horizontalScroll}
            >
                {/* <Box className='CarouselSpacing'></Box> */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <Box
                        className='CarouselItem'

                    >
                        {i + 1}
                        <CarouselDetail />
                    </Box>

                ))}
            </Box>
            <Center>
                <Box style={{ display: 'flex' }} >
                    {pages.map((_, i) => (
                        <Box key={i}>
                            <Button className='CarouselDotNav'
                                opacity={i === activePageIndex ? 0.5 : 1}
                                onClick={() => goTo(i)}
                            >
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Center>
        </>
    );
};

