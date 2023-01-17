import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    nohp: "",
    role: "",
    status: "",
    id: "",
    token: "",
    isLogin: false,
    isRegister: false
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        userLogin(state, action) {
            state.nama = action.payload.nama;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.alamat = action.payload.alamat;
            state.nohp = action.payload.nohp;
            state.role = action.payload.role;
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.isLogin = action.payload.isLogin;
        },
        userRegister(state, action) {
            state.nama = action.payload.nama;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.alamat = action.payload.alamat;
            state.nohp = action.payload.nohp;
            state.role = action.payload.role;
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.isLogin = action.payload.isLogin;
            state.isRegister = action.payload.isRegister;
        }
    }
});


export const selectUser = (state) => state.userData;

export const { userLogin, userRegister } = userDataSlice.actions;

export default userDataSlice.reducer;