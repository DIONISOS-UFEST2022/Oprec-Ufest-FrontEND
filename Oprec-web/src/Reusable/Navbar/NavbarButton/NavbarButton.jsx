import { Box } from "@chakra-ui/react";
import "./NavbarButton.scss"

export function NavbarButton(props) {
    return (
        <Box
            color={props.color}
            className="NavbarButton fromLeft"
            onClick={props.onClick}>
            {props.Title}
        </Box>
    )
}