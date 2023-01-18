import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import "./AboutCard.scss";

export function AboutCard(props) {
    return (<Box className="about-container" flexDirection={props.direction} transform="translateY(-130px)">
        <HStack className="about-card" flexDirection={props.direction}>
            <Box className="about-image"></Box>
            {/* <Box className="about-title">Unveiling</Box> */}
            <Box className="about-card-img">
            </Box>
            <Box className="about-card-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </Box>
        </HStack>
    </Box>);
}
