import "./NavbarButton.scss"
import { Button } from "@mui/material";
// import { Button } from "@chakra-ui/react";
import { useState } from "react";


export function NavbarButton(props) {
    const [hover, sethover] = useState(false);
    return (<>
        <Button
            onMouseOver={() => sethover(true)}
            onMouseOut={() => sethover(false)}
            className="NavbarButton"
            style={{ textTransform: 'none' }}
            onClick={props.onClick}>
            {/* <Image className="NavImg" src={props.src} /> */}
            {props.Title}
            {/* test */}
        </Button>
    </>
    )
}