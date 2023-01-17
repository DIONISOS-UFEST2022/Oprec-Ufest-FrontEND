import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: "home",
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.page = action.payload;
        }
    }
});

export const selectPage = (state) => state.page.page;

export const { pageChanged } = pageSlice.actions;

export default pageSlice.reducer;