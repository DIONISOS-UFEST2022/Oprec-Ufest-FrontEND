import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { DivisonCard } from './DivisonCard'
import { DivisonData } from './DivisionData'
import "./Divison.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Division(props) {
    // useEffect(() => {
    //     AOS.init();
    // }, [])
    return (<>

        <Box className="Divison">
            <Center>
                <h1> This is Divison</h1>
            </Center>
            {/* <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset='200' data-aos-mirror='true' */}
            {/* > */}
                {DivisonData.map((item) => {
                    return <DivisonCard name={item.name} divison={item.divison} namedesc={item.namedesc} />
                })}
            {/* </div> */}
        </Box>

    </>)
}