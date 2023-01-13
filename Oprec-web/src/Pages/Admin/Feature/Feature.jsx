import { Box, VStack } from "@chakra-ui/react"
import "./Feature.scss"



function FeatureCard(props) {
    return (<>
        <Box className="FeatureCard">
            {props.content}
        </Box>
    </>)
}

export function Feature(props) {
    return (<>
        <Box className="Feature">
            <FeatureCard content="Turn OFF/ON Response" />
            <FeatureCard content="Announcement" />
            {/* <FeatureCard content="" /> */}
        </Box>
    </>)
}