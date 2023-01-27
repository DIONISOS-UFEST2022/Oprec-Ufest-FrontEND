import "./NavbarButton.scss"
import Button from "@mui/material/Button";


export function NavbarButton(props) {
    return (<>
        <Button
            className="NavbarButton"
            style={{ textTransform: 'none' }}
            onClick={props.onClick}>
            {props.Title}
        </Button>
    </>
    )
}