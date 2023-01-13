import { Box, Center, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import "./Footer.scss"
import icon_youtube from "./../../Asset/Image/Other Icon/icon-youtube.png";
import icon_email from "./../../Asset/Image/Other Icon/icon-email.png";
import icon_instagram from "./../../Asset/Image/Other Icon/icon-instagram.png";
import icon_line from "./../../Asset/Image/Other Icon/icon-line.png";
import icon_tiktok from "./../../Asset/Image/Other Icon/icon-tiktok.png";
import icon_website from "./../../Asset/Image/Other Icon/icon-website.png";

function LinkCard(props) {
    return (<HStack margin={"10px"}>
        <Image width={"25px"} height="25px" src={props.image} /><Text>{props.title}</Text>
    </HStack>)
}


export function Footer() {
    return (<Box>
        <Flex
            templateAreas={`"section1 section2 section3 section4"
            "foot foot foot foot"`}
            className="Footer"
            direction={{ base: 'column', md: 'row' }}
        >
            <Box className="footersection" area={'section1'}>
                <Center>
                    <Image background={"white"} height="100px" width={"100px"} />
                </Center>
            </Box>
            <Box className="footersection" area={'section2'}>
                <Text className="title">Address</Text>
                Universitas Multimedia Nusantara
                <br />
                Jl. Scientia Boulevard,
                <br />
                Gading Serpong,
                <br />
                Tangerang Banten - 15811,
                <br />
                Indonesia
            </Box>
            <Box className="footersection" area={'section3'}>
                <Text className="title">Contact</Text>
                <LinkCard image={icon_email} title="umnfestival@umn.ac.id" />
                <LinkCard image={icon_instagram} title="@umnfestival" />
                <LinkCard image={icon_tiktok} title="@umnfestival" />
                <LinkCard image={icon_line} title="@877tuixh" />
            </Box>
            <Box className="footersection" area={'section4'}>
                <Text className="title">Link</Text>
                <LinkCard image={icon_youtube} title="UMN Festival" />
                <LinkCard image={icon_website} title="UMN Festival" />
            </Box>
        </Flex>
        <Box className="footerfoot" area={'foot'}>
            © UMN FESTIVAL 2022
            <br />
            This website is managed by Dionisos UFEST 2023
        </Box>
    </Box>)
}