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
                <img loading="lazy" alt="social media icon"
                    className="Card-Image"
                    decoding='async'
                    src={props.image} />
                {/* <svg className="Footer-Link-bg " xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                    <path class="si-splash" id="splash" fill={props.color} fill-rule="nonzero" d="M64.390766 7.893908c9.13892 9.586965-3.91575 14.742016.007852 26.63074 3.923603 11.888725 14.324106 14.96342 8.658127 27.114154-5.66598 12.150732-26.532488 3.603945-34.986257 10.31272-8.45377 6.708774-18.30274 6.258113-20.89926-9.745485-2.596518-16.0036-21.680047-20.760404-6.134962-40.13869 15.545086-19.378288 44.21558-23.760404 53.3545-14.17344z"></path>

                </svg> */}
            </a>

        </Grid>
    )
}

export default function Footer() {
    return (
        <LazyMotion features={domAnimation}>
            <Grid container id="Footer"
                spacing={0}
            >
                <GridItem item md={4} xs={12}>
                    <div className="Footer-Section">
                        <div className='Logo-Wrap'>
                            {/* <UFESTLOGOWHITE /> */}
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
                            Jl. Scientia Boulevard, Gading Serpong
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
                            className="Footer-Link-Card-Sosmed"
                        >
                            {MedsosList.map((item, index) => {
                                return (
                                    <LinkCard
                                        key={index}
                                        title={item.title}
                                        image={item.image}
                                        href={item.href}
                                        color={item.color}
                                    />
                                )
                            })}
                        </GridItem2>

                    </div>
                    {/* <div className="divider" /> */}
                </GridItem>
                <Grid item xs={12}>

                    <div className="Footer-Foot">
                        <div class="curve"></div>
                        © UMN FESTIVAL 2023
                        <br />
                        Managed by <Sparkles><span className="purpleText">Coeus</span></Sparkles> UMN Festival 2023
                    </div>
                </Grid>
            </Grid >
            {/* </m.div> */}
        </LazyMotion>
    )
}