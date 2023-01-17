import { Box } from "@chakra-ui/react";
import "./Admin.scss"
import { useState } from "react";
import { Division } from "../Admin/Division/Division";
import { Database } from "../Admin/Database/Database";
import { NavbarAdmin } from "../../Reusable/NavbarAdmin/NavbarAdmin";
import { Feature } from "./Feature/Feature";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { DivisionNav } from "./Division/DivisionNav";
export function Admin() {
    // const [page, setPage] = useState('database');
    const page = useSelector(selectPage);
    return <Box className="admin">
        <NavbarAdmin />
        {(() => {
            switch (page) {
                case 'database':
                    return <Database/>;
                case 'division':
                    return <Division/>;
                case 'feature':
                    return <Feature/>;
                default:
                    return null;
            }
        })()}
    </Box>
}