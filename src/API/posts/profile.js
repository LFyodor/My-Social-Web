import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk(
    'posts/fetchProfile',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://test-api-post.herokuapp.com/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);