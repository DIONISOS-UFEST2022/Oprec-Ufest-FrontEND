import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userRole: null,
    userInfo: {},
    userToken: null,
    loading: false,
    error: null,
    success: false,
};


const userRoleSlice = createSlice({
    name: 'userRole',
    initialState,
    reducers: {
        userRoleAdded(state, action) {
            state.userRole = action.payload;
        },
        userTokenAdded(state, action) {
            state.userToken = action.payload;
        },
    },
    extraReducers: {
        loginUser(state, action) {
            state.loading = true
            state.error = null
        },
        loginUserSuccess(state, action) {
            state.loading = false
            state.error = null
            state.success = true
            state.userToken = action.payload
        },
        loginUserFail(state, action) {
            state.loading = false
            state.error = action.payload
            state.success = false
        },
    }
})

export const selectuserRole = (state) => state.userRole.userRole;

export const selectuserToken = (state) => state.userRole.userToken;

export const { userRoleAdded, loginUser, loginUserSuccess, loginUserFail, userTokenAdded } = userRoleSlice.actions;

export default userRoleSlice.reducer;