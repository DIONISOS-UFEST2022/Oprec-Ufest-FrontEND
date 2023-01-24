import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const CustomTextField = styled(TextField)({
    // background: "red",
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    marginTop: "10px",
    "& .MuiInput-underline:after": {
        borderBottomColor: "green"
    },
    "& .MuiinputBase-input": {
        color: "green",
        background: "red"
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: "green"
    },
});