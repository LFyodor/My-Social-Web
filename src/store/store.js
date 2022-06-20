import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice';
import loadPostSlice from "./loadPostSlice";
import loadSlice from './loadSlice';
import { createSagaMiddlewqre } from 'redux-saga';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        loadposts: loadPostSlice,
        loadsite: loadSlice,
    },
});