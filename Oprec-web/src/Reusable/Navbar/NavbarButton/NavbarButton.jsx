import "./NavbarButton.scss"
import Button from "@mui/material/Button";

export function NavbarButton(props) {
    return (
        <button
            className="Navbar-Desktop-Button"
            onClick={props.onClick}>
            <p>{props.Title}</p>
        </button>
    )
}