import "./NavbarButton.scss"
import Button from "@mui/material/Button";


export function NavbarButton(props) {
    return (
        <Button
            className="Navbar-Desktop-Button"
            style={{ textTransform: 'none' }}
            onClick={props.onClick}>
            {props.Title}
        </Button>
    )
}