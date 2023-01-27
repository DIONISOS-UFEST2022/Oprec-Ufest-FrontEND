import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { AboutData } from "./AboutData";
import "./About.scss"
import React, { useEffect, lazy, Suspense } from "react";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";

const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));

export default function About() {
  let direction = "left";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (<>
    <div className="About">
      <div className="Title" >What is UMN Festival 2023?</div>
      <Suspense fallback={<LoadingScreen />}>
        <Grid container>
          {AboutData.map((item, index) => {
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