import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import portfolioSlice from "./portfolioSlice";

/**
 * reducers: contengono le funzioni per modificare lo stato
 * actions: arrivano dal fe per modificare lo stato dentro i reducers
 * slices: contiene i reducers + initial state
 */

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice.reducer
    },
}, applyMiddleware(thunk));
export default store;