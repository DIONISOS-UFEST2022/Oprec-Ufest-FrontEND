import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import "./Admin.scss"
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
const NavbarAdmin = lazy(() => import("./../../Reusable/NavbarAdmin/NavbarAdmin"));
const Feature = lazy(() => import("./Feature/Feature"));
const Division = lazy(() => import("./Division/Division"));
const Database = lazy(() => import("./Database/Database"));

export default function Admin() {
    const page = useSelector(selectPage);
    return <div id="Admin">
        <Suspense fallback={<LoadingScreen />}>
            <NavbarAdmin />
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