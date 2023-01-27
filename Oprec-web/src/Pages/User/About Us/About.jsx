import { AboutCard } from "./AboutCard/AboutCard"
import { Grid } from "@material-ui/core";
import { AboutData } from "./AboutData";
import { useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.scss"

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

export default function About() {
  const { scrollYProgress } = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  })
  return (<>
    <div className="about">
      <div className="heading" >TENTANG</div>
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
    </div>
  </>
  )
}