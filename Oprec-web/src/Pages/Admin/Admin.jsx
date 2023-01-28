import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import Division from "./Division/Division";
import Database from "./Database/Database";
import Feature from "./Feature/Feature";
import NavbarAdmin from "./../../Reusable/NavbarAdmin/NavbarAdmin"


// const NavbarAdmin = lazy(() => import("../../Reusable/NavbarAdmin/NavbarAdmin"));


// const Division = lazy(() => import("./Division/Division"));
// const Database = lazy(() => import("./Database/Database"));
// const Feature = lazy(() => import("./Feature/Feature"));




export default function Admin() {
    const page = useSelector(selectPage);
    return <div className="admin">
        <Suspense fallback={<div>Loading...</div>}>
            <NavbarAdmin />
            {/* </Suspense> */}
            {(() => {
                switch (page) {
                    case 'database':
                        return <Suspense fallback="Loading..."><Database /></Suspense>;
                    case 'division':
                        return <Suspense fallback="Loading..."><Division /></Suspense>;
                    case 'feature':
                        return <Suspense fallback="Loading..."><Feature /></Suspense>;
                    default:
                        return null;
                }
            })()}
        </Suspense>
    </div>
}