import { createAsyncThunk } from "@reduxjs/toolkit";

export const editPostServer = createAsyncThunk(
    'posts/editPostServer',
    async function(editingPost, {rejectWithValue}) {
        try {
            const response = await fetch(`https://test-api-post.herokuapp.com/posts/post/${editingPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify({title: editingPost.title, description: editingPost.description})
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