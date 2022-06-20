import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: '',
    loading: false,
    error: false,
};

export const loadSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadSite: (state, action) => {
            switch (action.type) {
                case 'REQUESTED_SITE':
                    return {
                        url: '',
                        loading: true,
                        error: false,
                    };
                case 'REQUESTED_SITE_SUCCEEDED':
                    return {
                        url: action.url,
                        loading: false,
                        error: false,
                    };
                case 'REQUESTED_SITE_FAILED':
                    return {
                        url: '',
                        loading: false,
                        error: true,
                    };
                default:
                    return state;
            }
        }
    }
});

export const requestSite = () => {
    return { type: 'REQUESTED_SITE' }
};

export const requestSiteSuccess = (data) => {
    return { type: 'REQUESTED_SITE_SUCCEEDED', url: data.message }
};

export const requestSiteError = () => {
    return { type: 'REQUESTED_SITE_FAILED' }
};

export const fetchSite = () => {
    return { type: 'FETCHED_SITE' }
};

export const { loadSite } = loadSlice.actions;

export default loadSlice.reducer;