import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice';
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        posts: postReducer,
    },
});