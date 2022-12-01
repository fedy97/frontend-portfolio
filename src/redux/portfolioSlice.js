import {createSlice} from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        skillResponses: null,
        experienceResponses: null,
        projectResponses: null,
        educationResponses: null,
        personalResponse: null,
        loading: true
    },
    reducers: {
        replaceData(state, action) {
            state.skillResponses = action.payload.skillResponses;
            state.experienceResponses = action.payload.experienceResponses;
            state.projectResponses = action.payload.projectResponses;
            state.educationResponses = action.payload.educationResponses;
            state.personalResponse = action.payload.personalResponse;
        },
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
    },
});

export const portfolioActions = portfolioSlice.actions;

export default portfolioSlice;