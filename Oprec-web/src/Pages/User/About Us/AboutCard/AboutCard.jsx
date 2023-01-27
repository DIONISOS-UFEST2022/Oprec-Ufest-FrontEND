import { Grid } from "@material-ui/core";
import "./AboutCard.scss";

export function AboutCard(props) {
    return (
        <Grid container className="aboutCard" flexDirection={props.direction} transform="translateY(-130px)">
            <Grid item xs={2}>
                <p className="image"></p>
            </Grid>
            <Grid item xs={10}>
                <p className="title">{props.title}</p>
                <p className="desc">
                    {props.data}
                </p>
            </Grid>
        </Grid>);
}
