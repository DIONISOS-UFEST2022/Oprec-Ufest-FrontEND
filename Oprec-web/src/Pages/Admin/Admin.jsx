import { Box } from "@chakra-ui/react";
import "./Admin.scss"
import { useState } from "react";
import { Division } from "../Admin/Division/Division";
import { Database } from "../Admin/Database/Database";
import { NavbarAdmin } from "../../Reusable/NavbarAdmin/NavbarAdmin";
import { DivisionNav } from "./Division/DivisionNav";
import { DivisonMenu } from "./Division/DivisionMenuDetail";
import { Feature } from "./Feature/Feature";

export function Admin() {
    const [page, setPage] = useState('database');
    const handleClick = pagestate => {
        setPage(pagestate);
    };
    return <Box className="admin">
        <NavbarAdmin handleClick={handleClick} />
        {(() => {
            switch (page) {
                case 'database':
                    return <Database handleClick={handleClick} />;
                case 'division':
                    return <Division handleClick={handleClick} />;
                case 'feature':
                    return <Feature handleClick={handleClick} />;
                default:
                    return null;
            }
        })()}
    </Box>
}