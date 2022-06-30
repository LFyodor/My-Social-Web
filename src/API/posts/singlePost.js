import { createAsyncThunk } from "@reduxjs/toolkit";

export const singlePostServer = createAsyncThunk(
    'posts/singlePostServer',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://test-api-post.herokuapp.com/posts/post/${id}`, {
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