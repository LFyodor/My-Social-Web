import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        auth: !!(localStorage.getItem('token')),
        loading: false,
        error: null,
    },
    reducers: {
        userAuth: (state) => {
            state.auth = !state.auth
        },
    }
});

export const {userAuth, clearState} = userSlice.actions;

export default userSlice.reducer;