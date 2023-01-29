import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sound: false,
    isPlaying: null
};


const userSoundSlice = createSlice({
    name: 'userSound',
    initialState,
    reducers: {
        userSoundControl(state, action) {
            state.sound = action.payload;
        },
    },

})




export const selectSound = (state) => state.userSound.sound;

export const selectIsPlaying = (state) => state.userSound.isPlaying;

export const { userSoundControl } = userSoundSlice.actions;

export default userSoundSlice.reducer;