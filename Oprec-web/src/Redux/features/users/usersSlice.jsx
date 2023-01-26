// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const USER_URL = "https://jsonplaceholder.typicode.com/users";

// const initialState = [];

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     try {
//         const response = await axios.get(USER_URL);
//         return [...response.data];
//     } catch (error) {
//         console.log(error);
//     }
// });

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchUsers.fulfilled]: (state, action) => {
//             return action.payload;
//         }
//     }
// })

// export const selectAllUsers = (state) => state.users;

// export default usersSlice.reducer;