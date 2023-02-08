// React
import React, { useEffect, lazy, Suspense } from "react";
// Styling  & Animation 
import "./About.scss"
// MUI
import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// Cookies
import { setCookie } from "react-use-cookie";
const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
// Components
import { AboutData } from "./AboutData";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import YoutubeEmbed from "../../../Reusable/ComponentItems/Youtube/YoutubeEmbed";
import { CounterTesting } from "../Home/Component/UFESTLOGO/WordAnimate/Testing";
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));
const AboutCardMobile = lazy(() => import("./AboutCardMobile/AboutCardMobile"));







export default function About() {
  // paralax
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // 


  // const isMobile = useMediaQuery("(max-width: 700px)");
  // let direction = "left";

  useEffect(() => {
    setCookie('about', 'about', { path: '/' });
    window.scrollTo(0, 0)
  }, []);

  return (
    <div id="About">
      <Pilar />
      <div className="About-Title">
        <CounterTesting choice={'about'} />
      </div>
      <Suspense fallback={<LoadingScreen />}>
        <Grid container>
          {
            AboutData.map((item, index) => {
              return (
                <Grid className="GridItem" item xs={12} key={index}>
                  <AboutCardMobile
                    title={item.title}
                    desc={item.data}
                    logo={item.image}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Suspense>
      {/* <YoutubeEmbed embedId="3una_kqhHBQ " /> */}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  )
}