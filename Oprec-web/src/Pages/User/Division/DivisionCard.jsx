import { Box, Text, Image, Flex } from "@chakra-ui/react";
import "./Division.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function DivisionCard(Props) {
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
            <Box className="DivisionCard">
                <Flex>
                    <Image className="DivisionLogo" />
                    <h1 className="DivisionCardTitle">{Props.name} - {Props.Division}</h1>
                    <Text className="namedesc">&ldquo; {Props.namedesc} &rdquo;</Text>
                </Flex>
            </Box>
        </Box>)
}