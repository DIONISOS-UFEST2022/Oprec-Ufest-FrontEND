import "./NavbarButtonAdmin.scss"

export default function NavbarButtonAdmin(props) {
    return (
        <div
            className="NavbarButtonAdmin"
            id={props.id}
            onClick={props.onClick}
            style={{ color: props.color }}
        >
            {props.Title}
        </div>
    )
}