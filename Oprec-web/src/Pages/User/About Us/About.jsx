import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { AboutData } from "./AboutData";
import "./About.scss"
import React, { lazy, Suspense } from "react";

const AboutSection = lazy(() => import("./AboutCard/AboutSection"));
const AboutCard = lazy(() => import("./AboutCard/AboutCard"));

export default function About() {
  let direction = "left";
  return (<>
    <div className="About">
      <div className="Title" >What is UMN Festival 2023?</div>
      <Suspense fallback={""}>
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