import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userRole: 'guest',
};


const userRoleSlice = createSlice({
    name: 'userRole',
    initialState,
    reducers: {
        userRoleAdded(state, action) {
            state.userRole = action.payload;
        },
    }
})

export const selectuserRole = (state) => state.userRole.userRole;

export const { userRoleAdded } = userRoleSlice.actions;

export default userRoleSlice.reducer;