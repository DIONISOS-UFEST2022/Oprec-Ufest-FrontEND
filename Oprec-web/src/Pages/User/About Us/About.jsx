// React
import React, { useEffect, lazy, Suspense } from "react";
// Styling  & Animation 
import "./About.scss"
import { useMediaQuery } from "@material-ui/core";
// MUI
import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// Cookies
import { setCookie } from "react-use-cookie";
const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
// Components
import { AboutData } from "./AboutData";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
// import AboutCardMobile from "./AboutCardMobile/AboutCardMobile";
// Component Lazy Loading
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));
const AboutCardMobile = lazy(() => import("./AboutCardMobile/AboutCardMobile"));


export default function About() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  let direction = "left";
  useEffect(() => {
    setCookie('about', 'about', { path: '/' });
    window.scrollTo(0, 0)
  }, []);
  return (
    <div id="About">
      <div className="Title" >What is UMN Festival 2023?</div>
      <Suspense fallback={<LoadingScreen />}>
        <Grid container>
          {isMobile ?
            AboutData.map((item, index) => {
              if (index % 2 === 0) direction = "right";
              else direction = "left";
              return (
                <Grid className="GridItem" item xs={12} key={index}>
                  <AboutCardMobile
                    title={item.title}
                    desc={item.data}
                    direction={direction}
                    logo={item.image}
                  />
                </Grid>
              )
            })
            :
            AboutData.map((item, index) => {
              if (index % 2 === 0) direction = "right";
              else direction = "left";
              return (
                <Grid item xs={12} key={index}>
                  <AboutSection>
                    <AboutCard
                      title={item.title}
                      data={item.data}
                      direction={direction}
                      image={item.image}
                    />
                  </AboutSection>
                </Grid>
              )
            })
          }
        </Grid>
      </Suspense>
    </div>
  )
}