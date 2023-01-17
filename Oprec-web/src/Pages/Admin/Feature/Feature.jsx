import React, { useState } from "react"
import { Box, VStack, Switch, Flex, Text } from "@chakra-ui/react"
import "./Feature.scss"
import { AlertStopResponse } from "./FeatureResponse"

function ResponseCard(props) {
    const [checked, setChecked] = useState(true)
    return (<>
        <Flex className="FeatureCard">
            <Box className="VStack">
                <Text className="Heading">
                    {props.content}
                </Text>
                {/* <Text>
                    This is a description
                </Text> */}
                {/* <Switch className="switch" onChange={} size='lg' /> */}
                <AlertStopResponse/>
            </Box>

        </Flex>
    </>)
}



function AnnouncementCard(props) {
    return (<>
        <Box className="FeatureCard">
            {props.content}
        </Box>
    </>)
}


export function Feature(props) {
    return (<>
        <Box className="Feature">
            <ResponseCard content="Turn OFF/ON Response" />
            <AnnouncementCard content="Announcement" />
        </Box>
    </>)
}