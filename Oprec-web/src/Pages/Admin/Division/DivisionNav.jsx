import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AllContext } from "../../../Reusable/Context/AllContext";
import "./DivisionNav.scss"
import { DivisionData } from "../../User/Division/DivisionData";

function DivisionNavCard(props) {
    return (<>
        <Box as="button" onClick={props.onClick} className="DivisionNavCard">
            <Box>{props.Title} - {props.subTitle}</Box>
        </Box>
    </>)
}


export function DivisionNav(props) {
    const { page, setpage } = useContext(AllContext);
    return (<>
        <Box className="DivisionNav">

            {DivisionData.filter((data) => data.id !== 0).map((filtered, index) => {
                return <DivisionNavCard key={filtered.id} color={page === "about" ? "red" : "white"} className="DivisionNav" subTitle={filtered.name} Title={filtered.division} onClick={() => { props.handleClick(filtered.division); }} />
            }
            )}
        </Box>
    </>)
}

