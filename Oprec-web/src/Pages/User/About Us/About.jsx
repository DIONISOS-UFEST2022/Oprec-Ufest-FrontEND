import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { AboutData } from "./AboutData";
import "./About.scss"
import React, { useEffect, lazy, Suspense } from "react";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import { useMediaQuery } from "@material-ui/core";
import AboutCardMobile from "./AboutCardMobile/AboutCardMobile";
import { setCookie } from "react-use-cookie";
const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));


export default function About() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  let direction = "left";
  useEffect(() => {
    setCookie('about', 'about', { path: '/' });
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
                  <AboutCard
                    title={item.title}
                    data={item.data}
                    direction={direction}
                    image={item.image}
                  />
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