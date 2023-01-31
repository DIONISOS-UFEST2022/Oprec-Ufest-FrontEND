import { Grid } from '../MaterialUICoreLazy/MaterialUICoreLazy';
import "./Footer.scss"
import icon_youtube from "./../../Asset/Image/Other Icon/icon-youtube.webp";
import icon_email from "./../../Asset/Image/Other Icon/icon-email.webp";
import icon_instagram from "./../../Asset/Image/Other Icon/icon-instagram.webp";
import icon_line from "./../../Asset/Image/Other Icon/icon-line.webp";
import icon_tiktok from "./../../Asset/Image/Other Icon/icon-tiktok.webp";
import icon_website from "./../../Asset/Image/Other Icon/icon-website.webp";
import Sparkles from "../Animation/Sparkle/Sparkle";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import { LazyMotion, domAnimation, m } from 'framer-motion';

function LinkCard(props) {
    return (
        <a className="Footer-Link-Card" href={props.href}>
            <img loading="lazy" alt="social media icon" className="Card-Image" decoding='async' src={props.image} />
        </a>
    )
}



export default function Footer() {
    return (
        <Grid container id="Footer"
            spacing={0}
        >
            <Grid item md={4} xs={12}>
                <div className="Footer-Section">
                    <div className='Logo-Wrap'>
                        <img loading="lazy" alt="UMN FESTIVAL 2023 Logo" className="UFEST-LOGO" src={Logo} />
                    </div>
                </div>
            </Grid>
            <Grid item md={4} sm={12}>
                <div className="Footer-Section">
                    <Sparkles>
                        <p className="title">ADDRESS</p>
                    </Sparkles>
                    <p className="address">
                        Universitas Multimedia Nusantara
                        <br />
                        Jl. Scientia Boulevard
                        <br />
                        Gading Serpong
                        <br />
                        Tangerang, Banten
                        <br />
                        15811, Indonesia
                    </p>
                </div>
            </Grid>
            <Grid item md={4} sm={12}>
                <div className="Footer-Section">
                    <p className="title">
                        <Sparkles>
                            FOLLOW US!
                        </Sparkles>
                    </p>
                    <LinkCard image={icon_email} title="umnfestival@umn.ac.id" href="mailto:umnfestival@umn.ac.id" />
                    <LinkCard image={icon_instagram} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_tiktok} title="@umnfestival" href="https://www.tiktok.com/@umnfestival" />
                    <LinkCard image={icon_line} title="@877tuixh" href="https://page.line.me/?accountId=877tuixh" />
                    {/* <p className="title">LINK</p> */}
                    <LinkCard image={icon_youtube} title="UMN Festival" href="https://www.youtube.com/channel/UCnXYSFlUeQn8dFDtYo4HABQ" />
                    <LinkCard image={icon_website} title="UMN Festival" href="https://ufest.umn.ac.id" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="Footer-Foot">
                    © UMN FESTIVAL 2023
                    <br />
                    This website is managed by <Sparkles><span className="purpleText">Dionisos</span></Sparkles> U-FEST 2023
                </div>
            </Grid>
        </Grid >
    )
}