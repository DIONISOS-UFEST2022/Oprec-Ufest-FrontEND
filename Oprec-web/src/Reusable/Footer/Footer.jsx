import { Box, HStack, Center, Image, Text, Divider } from "@chakra-ui/react"; import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from "@chakra-ui/react";
import "./Footer.scss"
import icon_youtube from "./../../Asset/Image/Other Icon/icon-youtube.png";
import icon_email from "./../../Asset/Image/Other Icon/icon-email.png";
import icon_instagram from "./../../Asset/Image/Other Icon/icon-instagram.png";
import icon_line from "./../../Asset/Image/Other Icon/icon-line.png";
import icon_tiktok from "./../../Asset/Image/Other Icon/icon-tiktok.png";
import icon_website from "./../../Asset/Image/Other Icon/icon-website.png";
import logo from "./../../Asset/Image/Ufest Logo/logo.png";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "../Function/useIntersectionObserver";
import { Button } from "@material-ui/core";
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import Sparkles from "../Animation/Sparkle/Sparkle";



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


const AnimatedGrid = styled(animated(Grid))``;



export function Footer() {
    const triggerRef = useRef();
    const [visible, setVisible] = useState(false);
    const dataRef = useIntersectionObserver(triggerRef, {
        freezeOnceVisible: true
    });
    const headerStyle = useSpring({
        config: { duration: 400 },
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            y: dataRef?.isIntersecting ? 0 : 50,
        },
    });



    return (<div className="Footer" >
        <AnimatedGrid style={{ ...headerStyle }}
            container>
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
                    {/* <Button startIcon={MapTwoToneIcon}>See on the MAP</Button> */}
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
                <Box className="footerfoot" ref={triggerRef} area={'foot'}>
                    © UMN FESTIVAL 2023
                    <br />
                    This website is managed by <Sparkles><span className="purpleText">Dionisos</span></Sparkles> U-FEST 2023
                </Box>
            </Grid>
        </AnimatedGrid>
    </div>)
}