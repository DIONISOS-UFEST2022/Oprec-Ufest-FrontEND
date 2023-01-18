import { Box, HStack, Center, Image, Text, Divider } from "@chakra-ui/react"; import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import { Link } from "@material-ui/core";
import { Link } from "@chakra-ui/react";
import "./Footer.scss"
import icon_youtube from "./../../Asset/Image/Other Icon/icon-youtube.png";
import icon_email from "./../../Asset/Image/Other Icon/icon-email.png";
import icon_instagram from "./../../Asset/Image/Other Icon/icon-instagram.png";
import icon_line from "./../../Asset/Image/Other Icon/icon-line.png";
import icon_tiktok from "./../../Asset/Image/Other Icon/icon-tiktok.png";
import icon_website from "./../../Asset/Image/Other Icon/icon-website.png";
import logo from "./../../Asset/Image/Ufest Logo/logo.png";






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




function LinkCard(props) {
    return (
        <Link className="LinkCard" textDecor={"none"} href={props.href}>
            <HStack margin={"10px"}>
                <Image className="LinkCardimg" width={"25px"} height="25px" src={props.image} /><Text>{props.title}</Text>
            </HStack>
        </Link>
    )
}


export function Footer() {
    return (<Box className="Footer">
        <Grid container>
            <Grid md={3} sm={12}>
                <Box className="footersection" area={'section1'} overflow={"visible"}>
                    <Center width={'100%'} height="100%" overflow={"visible"}>
                        <Image className="image" src={logo} />
                    </Center>
                </Box>
            </Grid>
            <Grid md={3} sm={12}>
                <Box className="footersection" area={'section2'}>
                    <Text className="title">Address</Text>
                    <Text className="address">
                        Universitas Multimedia Nusantara
                        <br />
                        Jl. Scientia Boulevard,
                        <br />
                        Gading Serpong,
                        <br />
                        Tangerang Banten - 15811,
                        <br />
                        Indonesia
                    </Text>
                </Box>
            </Grid>
            <Grid md={3} sm={12}>
                <Box className="footersection" area={'section3'}>
                    <Text className="title">Contact</Text>
                    <LinkCard image={icon_email} title="umnfestival@umn.ac.id" href="mailto:umnfestival@umn.ac.id" />
                    <LinkCard image={icon_instagram} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_tiktok} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_line} title="@877tuixh" href="https://page.line.me/?accountId=877tuixh" />
                </Box>
            </Grid>
            <Grid md={3} sm={12}>
                <Box className="footersection">
                    <Text className="title">Link</Text>
                    <LinkCard image={icon_youtube} title="UMN Festival" href="https://www.youtube.com/channel/UCnXYSFlUeQn8dFDtYo4HABQ" />
                    <LinkCard image={icon_website} title="UMN Festival" href="https://ufest.umn.ac.id" />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box className="footerfoot" area={'foot'}>
                    © UMN FESTIVAL 2022
                    <br />
                    This website is managed by Dionisos UFEST 2023
                </Box>
            </Grid>
        </Grid>
    </Box>)
}