import { Box } from "@chakra-ui/react"
import "./NavbarButtonAdmin.scss"
// import { Button } from "@material-ui/core"
import { Button } from "@chakra-ui/react"

export function NavbarButtonAdmin(props) {
    return (
        <Box
            className="NavbarButtonAdmin"
            id={props.id}
            onClick={props.onClick}
            color={props.color}
        >
            {props.Title}
        </Box>
    )
}