import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../API/posts/fetchPosts";

export const deletePostServer = createAsyncThunk(
    'posts/deletePostServer',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://test-api-post.herokuapp.com/posts/post/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            if (!response.ok) {
                throw new Error('Can\'t delete post. Server error');
            }
            dispatch(deletePost(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.loading = 'rejected';
    state.error = action.payload;
}

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        comments: [],
        loading: null,
        error: null,
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        addComment: (state, action) => {
            state.comments.push(action.payload)
        },
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: setError,
        [deletePostServer.rejected]: setError,
    },
});

export const {addPost, deletePost, addComment} = postSlice.actions;

export default postSlice.reducer;