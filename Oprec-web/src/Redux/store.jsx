import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/users/userRoleSlice";
import userDataReducer from "./features/users/userDataSlice";
import pageReducer from "./features/page/pageSlice";

export const store = configureStore({
    reducer: {
        userRole: userRoleReducer,
        userData: userDataReducer,
        page: pageReducer,
    },
});