import "./NavbarButton.scss"
import Button from "@mui/material/Button";
// import { Button } from "@material-ui/core";
// import { Button } from "../../MaterialUICoreLazy/MaterialUICoreLazy";


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