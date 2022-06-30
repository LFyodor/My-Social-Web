import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAuth } from "../../store/userSlice";

export const loginServer = createAsyncThunk(
    'users/loginServer',
    async function (user, {rejectWithValue, dispatch}) {
        try {
            const userLoginServer = user;
            const response = await fetch('https://test-api-post.herokuapp.com/auth/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userLoginServer),
            });
            const temp = response.headers.get("Authorization");
            localStorage.setItem('token', temp);
            if (!response.ok) {
                throw new Error('Can\'t login. Server error');
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