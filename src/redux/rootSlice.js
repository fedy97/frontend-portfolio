import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "appState",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false,
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        reloadData: (state, action) =>{
            state.reloadData = action.payload
        }
    }

});

export default rootSlice.reducer;
export const {showLoading, hideLoading, setPortfolioData,reloadData} = rootSlice.actions