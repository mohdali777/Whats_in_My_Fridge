import { configureStore } from "@reduxjs/toolkit";
import testSlice from './slices/testSlice'
import logger from "redux-logger";

const store = configureStore({
    reducer:{
        test:testSlice
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    },
    devTools:true
})

export default store