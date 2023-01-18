import { Box } from "@chakra-ui/react";
import "./NavbarButton.scss"

export function NavbarButton(props) {
    return (
        <Box
            backgroundColor="black"
            color={props.color}
            className="NavbarButton fromLeft"
            as="button"
            onClick={props.onClick}>
            {props.Title}
        </Box>
    )
}