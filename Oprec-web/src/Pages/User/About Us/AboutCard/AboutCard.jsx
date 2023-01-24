import { Box, Text, Flex, HStack, Image } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import "./AboutCard.scss";

export function AboutCard(props) {
    return (
        <Grid container className="aboutCard" flexDirection={props.direction} transform="translateY(-130px)">
            <Grid item xs={2}>
                <Box className="image"></Box>
            </Grid>
            <Grid item xs={10}>
                <Text className="title">{props.title}</Text>
                <Text className="desc">
                    {props.data}
                </Text>
            </Grid>
        </Grid>);
}
