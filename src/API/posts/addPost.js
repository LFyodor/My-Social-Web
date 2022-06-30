import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost } from "../../store/postSlice";

export const addPostServer = createAsyncThunk(
    'posts/addPostServer',
    async function (post, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch('https://test-api-post.herokuapp.com/posts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(post)
            });
            if (!response.ok) {
                throw new Error('Can\'t add post. Server error');
            }
            dispatch(addPost(post));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);