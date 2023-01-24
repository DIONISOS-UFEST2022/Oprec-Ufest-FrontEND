import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import "./Division.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AdvancedCarousel } from './DivisonCarousel/Carousel'
import { DivisionCard } from './DivisionCard/DivisionCard'

export function Division(props) {
    return (<>
        <Box className="Division">
            <AdvancedCarousel />
        </Box>
    </>)
}