import { Box, Text, Image, Flex } from "@chakra-ui/react";
import "./DivisionCard.scss"

export function DivisionCard(Props) {
    return (
        <Box
            willChange={"transform"}
            transition={"all 0.5s ease-in-out"}
            _hover={
                {
                    opacity: 0.8,
                }
            }>
            <Box className="DivisionCard">
                <Flex>
                    <Image className="DivisionLogo" />
                    <h1 className="DivisionCardTitle">{Props.name} - {Props.Division}</h1>
                    <Text className="namedesc">&ldquo; {Props.namedesc} &rdquo;</Text>
                </Flex>
            </Box>
        </Box>)
}