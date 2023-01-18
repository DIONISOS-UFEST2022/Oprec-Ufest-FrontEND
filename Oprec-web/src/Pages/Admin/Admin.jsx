import { Box } from "@chakra-ui/react";
import "./Admin.scss"
import { useEffect, useState } from "react";
import { Division } from "../Admin/Division/Division";
import { Database } from "../Admin/Database/Database";
import { NavbarAdmin } from "../../Reusable/NavbarAdmin/NavbarAdmin";
import { Feature } from "./Feature/Feature";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import useCookie from 'react-use-cookie';


export function Admin() {

    useEffect(() => {
        // document.title = "Admin";
    }, []);
    const page = useSelector(selectPage);
    return <div className="admin">
        <NavbarAdmin />
        {(() => {
            switch (page) {
                case 'database':
                    return <Database />;
                case 'division':
                    return <Division />;
                case 'feature':
                    return <Feature />;
                default:
                    return null;
            }
        })()}
    </div>
}