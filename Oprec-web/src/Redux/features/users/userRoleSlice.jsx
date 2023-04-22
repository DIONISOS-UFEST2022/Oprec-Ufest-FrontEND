import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userRole: null,
    userInfo: {},
    userToken: null,
    userDivision: null,
    userName: null,
    userNim: null,
    userEmail: null,
    loading: true,
    error: null,
    success: false,
    isLogin: false,
    isJoin: false,
    file: null,
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
        userDivisionAdded(state, action) {
            state.userToken = action.payload;
        },
        userDataAdded(state, action) {
            state.userName = action.payload.name;
            state.userNim = action.payload.nim;
            state.userEmail = action.payload.email;
        },
        userLoadingAdded(state, action) {
            state.loading = action.payload;
        },
        userfileAdded(state, action) {
            state.file = action.payload;
        }
    },

})



export const selectuserRole = (state) => state.userRole.userRole;

export const selectuserName = (state) => state.userRole.userName;

export const selectuserNim = (state) => state.userRole.userNim;

export const selectuserEmail = (state) => state.userRole.userEmail;

export const selectuserToken = (state) => state.userRole.userToken;

export const selectuserDivision = (state) => state.userRole.userDivision;

export const selectLoading = (state) => state.userRole.loading;

export const selectuserFile = (state) => state.userRole.file;

export const { userDataAdded, userRoleAdded, userLoadingAdded, userTokenAdded, userDivisionAdded, userfileAdded } = userRoleSlice.actions;

export default userRoleSlice.reducer;