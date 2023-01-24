import { Box } from "@chakra-ui/react"
import "./NavbarButtonAdmin.scss"
import { Button } from "@material-ui/core"

export function NavbarButtonAdmin(props) {
    return (
        <Button
            className="NavbarButtonAdmin"
            id={props.id}
            onClick={props.onClick}
            sx={{
                color: 'white',
                backgroundColor: props.backgroundColor,
                "&:hover": {
                    backgroundColor: props.hoverBackgroundColor,
                    color: props.hoverColor
                }
            }}
        >
            {props.Title}
        </Button>
    )
}