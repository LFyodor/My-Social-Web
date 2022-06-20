import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {posts: []}

export const getPosts = createAsyncThunk(
    'posts/getposts',
    async (payload, { dispatch }) => {
        const res = await axios.get('https://test-api-post.herokuapp.com/')
        dispatch(setPosts(res.data))
    },
)

export const removeFromServer = createAsyncThunk(
    'posts/removeFromServer',
    async (id, { dispatch }) => {
        await axios.delete(`https://test-api-post.herokuapp.com/${id}`)
        dispatch(removePost(id))
    },
)

export const loadPostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
})
export const { setPosts, removePost } = loadPostSlice.actions

export default loadPostSlice.reducer