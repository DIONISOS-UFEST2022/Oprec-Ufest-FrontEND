import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { AboutData } from "./AboutData";
import "./About.scss"
import React, { useEffect, lazy, Suspense } from "react";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import { useMediaQuery } from "@material-ui/core";
import AboutCardMobile from "./AboutCardMobile/AboutCardMobile";
const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));


export default function About() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  let direction = "left";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (<>
    <div id="About">
      <div className="Title" >What is UMN Festival 2023?</div>
      <Suspense fallback={<LoadingScreen />}>
        <Grid container>
          {isMobile ?
            AboutData.map((item, index) => {
              if (index % 2 === 0) direction = "right";
              else direction = "left";
              return (
                // <AboutSection>
                <Grid className="GridItem" item xs={12} key={index}>
                  <AboutCardMobile
                    title={item.title}
                    desc={item.data}
                    direction={direction}
                  />
                </Grid>
                // </AboutSection>
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
                    />
                  </AboutSection>
                </Grid>
              )
            })
          }
        </Grid>
      </Suspense>
    </div>
  </>
  )
}