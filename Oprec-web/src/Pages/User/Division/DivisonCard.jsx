import { Box, Text, Image } from "@chakra-ui/react";
import "./Divison.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function DivisonCard(Props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Box
            willChange={"transform"}
            transition={"all 0.5s ease-in-out"}
            // data-aos="fade-left"
            // data-aos-duration="500"
            // data-aos-mirror='true'
            _hover={
                {
                   opacity: 0.8,
                }
            }

        >
            <Box className="DivisonCard">
                <Image className="DivisonLogo" />
                <h1 className="DivisonCardTitle">{Props.name} - {Props.divison}</h1>
                <Text className="namedesc">&ldquo; {Props.namedesc} &rdquo;</Text>
            </Box>
        </Box>)
}