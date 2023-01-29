import React from "react";
import "./NavbarAdmin.scss";
import { useSelector, useDispatch } from "react-redux";
// import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import axios from "axios";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";
import { URL } from "../Service/URL";


const NavbarButtonAdmin = React.lazy(() => import("./NavbarAdminButton/NavbarAdminButton"));


export default function NavbarAdmin(props) {
    const page = useSelector(selectPage);
    // const user = useSelector(selectuserRole);
    const dispatch = useDispatch();

    // logout
    function logouthandler() {
        const login = localStorage.getItem('LoginID');
        axios.get(`${URL}/api/logout`, {
            headers:
                { Authorization: `Bearer ${login}` }
        })
            .then((res) => {
                localStorage.removeItem('LoginID');
                // console.log(res.data);
                dispatch(pageChanged('login'));
                dispatch(userRoleAdded('guest'));

            }
            )
            .catch((err) => {
                // console.log(login)
                console.error(err);
            }
            );

    }
    return (
        <div className="NavbarAdminDesktop">
            <NavbarButtonAdmin color={page === "database" ? "red" : "white"} className="NavbarMenu" Title={"Database"} onClick={() => { dispatch(pageChanged('database')) }} />
            <NavbarButtonAdmin color={page === "division" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { dispatch(pageChanged('division')) }} />
            <NavbarButtonAdmin color={page === "feature" ? "red" : "white"} className="NavbarMenu" Title={"Feature"} onClick={() => { dispatch(pageChanged('feature')) }} />
            {/* <Profile /> */}
            <button className="buttonLogout" color="black" onClick={logouthandler}>Log Out</button>

        </div>
    )
}