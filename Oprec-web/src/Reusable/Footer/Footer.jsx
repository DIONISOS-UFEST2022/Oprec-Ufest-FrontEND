import { Grid as MuiGrid } from '../MaterialUICoreLazy/MaterialUICoreLazy';
import "./Footer.scss"

import Sparkles from "../Animation/Sparkle/Sparkle";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { MedsosList } from './medsos';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    // position: 'relative',
}));

const GridItem = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    margin: '20px',
    padding: '20px',
    // height: '100%',
}));

const GridItem2 = styled(MuiGrid)(({ theme }) => ({
    gap: '20px',
}));


function LinkCard(props) {
    return (
        <Grid item lg={2} md={4} sm={6} xs={2}>
            <a className="Footer-Link-Card" href={props.href}>
                <img loading="lazy" alt="social media icon" className="Card-Image" decoding='async' src={props.image} />
            </a>
        </Grid>
    )
}

export default function Footer() {
    return (
        <Grid container id="Footer"
            spacing={0}
        >
            <GridItem item md={4} xs={12}>
                <div className="Footer-Section">
                    <div className='Logo-Wrap'>
                        <img loading="lazy" alt="UMN FESTIVAL 2023 Logo" className="UFEST-LOGO" src={Logo} />
                    </div>
                </div>
                <div className="divider" />
            </GridItem>
            <GridItem item md={4} sm={12}>
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
                <div className="divider" />
            </GridItem>
            <GridItem item md={4} sm={12}>
                <div className="Footer-Section">
                    <p className="title">
                        <Sparkles>
                            FOLLOW US!
                        </Sparkles>
                    </p>
                    <GridItem2 container
                        justify="left"
                        className="Footer-Link-Card-Sosmed"
                    >
                        {MedsosList.map((item, index) => {
                            return (
                                <LinkCard
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    href={item.href}
                                />
                            )
                        })}
                    </GridItem2>

                </div>
                {/* <div className="divider" /> */}
            </GridItem>
            <Grid item xs={12}>
                <div className="Footer-Foot">
                    © UMN FESTIVAL 2023
                    <br />
                    This website is managed by <Sparkles><span className="purpleText">Coeus</span></Sparkles> UMN Festival 2023
                </div>
            </Grid>
        </Grid >
    )
}