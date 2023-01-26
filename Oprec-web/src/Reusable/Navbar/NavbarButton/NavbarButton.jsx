import { Box } from "@chakra-ui/react";
import "./NavbarButton.scss"
import { Image } from "@chakra-ui/react";
import Home from "./../../../Asset/Image/NavbarIcon/home.png"
import { Button } from "@mui/material";
import { useState } from "react";
import Sparkles from "../../Animation/Sparkle/Sparkle";


export function NavbarButton(props) {
    const [hover, sethover] = useState(false);
    return (<>
        <Button onMouseOver={() => sethover(true)} onMouseOut={() => sethover(false)} className="NavbarButton" onClick={props.onClick}>
            <Image className="NavImg" src={props.src} />
        </Button>
    </>
    )
}