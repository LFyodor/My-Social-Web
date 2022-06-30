import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://test-api-post.herokuapp.com/posts/all', {
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