// import { div, div, div } from "@chakra-ui/react";
import Grid from '@mui/material/Unstable_Grid2'
import "./Footer.scss"
import icon_youtube from "./../../Asset/Image/Other Icon/icon-youtube.webp";
import icon_email from "./../../Asset/Image/Other Icon/icon-email.webp";
import icon_instagram from "./../../Asset/Image/Other Icon/icon-instagram.webp";
import icon_line from "./../../Asset/Image/Other Icon/icon-line.webp";
import icon_tiktok from "./../../Asset/Image/Other Icon/icon-tiktok.webp";
import icon_website from "./../../Asset/Image/Other Icon/icon-website.webp";
import Sparkles from "../Animation/Sparkle/Sparkle";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"

function LinkCard(props) {
    return (
        <a className="LinkCard" href={props.href}>
            <div margin={"10px"}>
                <img loading="lazy" alt="social media icon" className="LinkCardimg" src={props.image} /><p>{props.title}</p>
            </div>
        </a>
    )
}


// const AnimatedGrid = styled(animated(Grid))``;



export default function Footer() {
    // const triggerRef = useRef();
    // const dataRef = useIntersectionObserver(triggerRef, {
    //     freezeOnceVisible: true
    // });
    // const headerStyle = useSpring({
    //     config: { duration: 400 },
    //     from: {
    //         opacity: 0,
    //         y: 50,
    //     },
    //     to: {
    //         opacity: dataRef?.isIntersecting ? 1 : 0,
    //         y: dataRef?.isIntersecting ? 0 : 50,
    //     },
    // });



    return (<div className="Footer" >
        <Grid container>
            <Grid md={3} sm={12}>
                <div className="footersection" overflow={"visible"}>
                    <div width={'100%'} height="100%" overflow={"visible"}>
                        <img loading="lazy" alt="UMN FESTIVAL 2023 Logo" className="image" src={Logo} />
                    </div>
                </div>
            </Grid>
            <Grid md={3} sm={12}>
                <div className="footersection">
                    <p className="title">Address</p>
                    <p className="address">
                        Universitas Multimedia Nusantara
                        <br />
                        Jl. Scientia Boulevard,
                        <br />
                        Gading Serpong,
                        <br />
                        Tangerang Banten - 15811,
                        <br />
                        Indonesia
                    </p>
                </div>
            </Grid>
            <Grid md={3} sm={12}>
                <div className="footersection">
                    <p className="title">Contact</p>
                    <LinkCard image={icon_email} title="umnfestival@umn.ac.id" href="mailto:umnfestival@umn.ac.id" />
                    <LinkCard image={icon_instagram} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_tiktok} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_line} title="@877tuixh" href="https://page.line.me/?accountId=877tuixh" />
                </div>
            </Grid>
            <Grid md={3} sm={12}>
                <div className="footersection">
                    <p className="title">Link</p>
                    <LinkCard image={icon_youtube} title="UMN Festival" href="https://www.youtube.com/channel/UCnXYSFlUeQn8dFDtYo4HABQ" />
                    <LinkCard image={icon_website} title="UMN Festival" href="https://ufest.umn.ac.id" />
                </div>
            </Grid>
            <Grid xs={12}>
                <div className="footerfoot">
                    © UMN FESTIVAL 2023
                    <br />
                    This website is managed by <Sparkles><span className="purpleText">Dionisos</span></Sparkles> U-FEST 2023
                </div>
            </Grid>
        </Grid>
    </div>)
}