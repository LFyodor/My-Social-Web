import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComment } from "../../store/postSlice";

export const addCommentServer = createAsyncThunk(
    'posts/addCommentServer',
    async function (comment, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch('https://test-api-post.herokuapp.com/comments/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(comment)
            });
            if (!response.ok) {
                throw new Error('Can\'t add post. Server error');
            }
            dispatch(addComment(comment));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);