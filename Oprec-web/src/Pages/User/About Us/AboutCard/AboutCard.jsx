import "./AboutCard.scss";
import { Suspense, useEffect, useState } from "react";
import { Grid } from "./../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";

export default function AboutCard(props) {
    const [direction, setDirection] = useState("left");
    useEffect(() => {
        if (props.direction === "left") {
            setDirection("left");
        } else {
            setDirection("right");
        }
    }, [])
    return (
        <Suspense fallback={""}>
            <Grid container className={`About-Card ${direction}`}
            >
                <Grid item className="gridItem" xs={5}
                >
                    <img src={props.image} decoding="async" className={`About-Image ${direction}`} />
                </Grid>
                <Grid item className="gridItem" xs={7}>
                    <p className="About-Title"
                        style={{
                            left: direction === "left" ? "unset" : "20px",
                            right: direction === "right" ? "unset" : "20px",
                        }}
                    >{props.title}</p>
                    <p className="About-Desc"
                        style={{
                            left: direction === "left" ? "unset" : "10px",
                            right: direction === "right" ? "unset" : "10px",
                        }}
                    >
                        {props.data}
                    </p>
                </Grid>
            </Grid>
        </Suspense >
    );
}
