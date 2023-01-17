import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { DivisionCard } from './DivisionCard'
import { DivisionData } from './DivisionData'
import "./Division.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AdvancedCarousel } from './DivisonCarousel/Carousel'

export function Division(props) {
    // useEffect(() => {
    //     AOS.init();
    // }, [])
    return (<>

        <Box className="Division">
            <Center>
                <h1> This is Division</h1>
            </Center>
            {/* {DivisionData.map((item) => {
                return <DivisionCard key={item.id} name={item.name} Division={item.Division} namedesc={item.namedesc} />
            })} */}
            <AdvancedCarousel />
        </Box>


    </>)
}