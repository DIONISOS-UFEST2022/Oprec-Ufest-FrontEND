import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";
import userRoleReducer from "./features/users/userRoleSlice";
import userDataReducer from "./features/users/userDataSlice";
import pageReducer from "./features/page/pageSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
        userRole : userRoleReducer,
        userData : userDataReducer,
        page : pageReducer,
    },
});