import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {posts: []},
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
        editTitle: (state, action) => {
            let index = state.posts.findIndex((post) => post.id !== action.payload.id)
            state.posts[index].title = action.payload
            console.log(action.payload.id);
        },
    },
});

export const {addPost, deletePost, editTitle} = postSlice.actions;

export default postSlice.reducer;