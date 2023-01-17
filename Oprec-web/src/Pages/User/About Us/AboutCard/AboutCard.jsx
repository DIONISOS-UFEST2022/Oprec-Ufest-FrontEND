import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import "./AboutCard.scss";

export function AboutCard(props) {
    return (<Box className="about-container" flexDirection={props.direction}>
        <Image className="about-image" />
        <Box className="about-title">Unveiling</Box>
        <Box className="about-card">
            <Box className="about-card-img">
            </Box>
            <Box className="about-card-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </Box>
        </Box>
    </Box>);
}
