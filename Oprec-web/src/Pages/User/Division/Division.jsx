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
    return (<>
        <Box className="Division">
            <AdvancedCarousel />
        </Box>
    </>)
}