import { Box, Text, CircularProgress } from "@chakra-ui/react";
import "./DivisionNav.scss"
import { DivisionData } from "../../User/Division/DivisionData";
import { useSelector } from "react-redux"; 
import { selectPage } from "../../../Redux/features/page/pageSlice";

function DivisionNavCard(props) {
    return (<>
        <Box
            height="130px"
            width={["200px", "300px"]}
            backgroundfilter="graysccale(100%)"
            as="button" onClick={props.onClick} className="DivisionNavCard">
            <Text>{props.Title} - {props.subTitle}</Text>
            <CircularProgress value={30} size='120px' />
        </Box>
    </>)
}

export function DivisionNav(props) {
    const page = useSelector(selectPage);
    return (<>
        <Box className="DivisionNav">
            {DivisionData.filter((data) => data.id !== 0).map((filtered, index) => {
                return <DivisionNavCard key={filtered.id} color={page === "about" ? "red" : "white"} className="DivisionNav" subTitle={filtered.name} Title={filtered.division} onClick={() => { props.handleClick(filtered.division); }} />
            }
            )}
        </Box>
    </>)
}

