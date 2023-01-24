import { Box, Image, Heading } from "@chakra-ui/react"
import "./About.scss"
import axios from "axios"
import { AboutCard } from "./AboutCard/AboutCard"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Grid } from "@material-ui/core";
import { AboutData } from "./AboutData";
import { MasonryWithVariableHeightItems } from "./AboutCard/Mansory";
import WhatIs from "./Section/WhatIS/WhatIs";
// import { motion, useScroll, useSpring, Variants } from "framer-motion"
import { useEffect } from "react";
import { animated } from "@react-spring/web";
import { motion, useSpring } from "framer-motion";
import { VisiMisi } from "./Section/VisiMisi/VisiMisi";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export function About() {
  const { scrollYProgress } = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  })
  return (<>
    <Box className="about">
      <Heading className="heading" fontSize={['20px', '30px', '40px']}>TENTANG</Heading>
      <Grid container>
        {AboutData.map((item, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Section>
                <AboutCard
                  title={item.title}
                  data={item.data}
                  direction={item.direction}
                />
              </Section>
            </Grid>
          )
        })
        }
      </Grid>
    </Box>
  </>
  )
}