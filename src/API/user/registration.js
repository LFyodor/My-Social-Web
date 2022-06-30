import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAuth } from "../../store/userSlice";

export const addUserServer = createAsyncThunk(
    'users/addUserServer',
    async function (user, {rejectWithValue, dispatch}) {
        try {
            const userServer = user;
            const response = await fetch('https://test-api-post.herokuapp.com/auth/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userServer)
            });
            const temp = response.headers.get("Authorization");
            localStorage.setItem('token', temp);
            if (!response.ok) {
                throw new Error('Can\'t add user. Server error');
            }
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data))
            dispatch(userAuth())
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);