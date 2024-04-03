import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import rootReducer from "./reducers"
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer"
import productSlice from "./reducers/productSlice";

// const store = createStore(rootReducer,
//     composeWithDevTools(applyMiddleware(thunk)));


//index.js에combineReducers 역할
const store = configureStore({
    reducer:{
        auth:authenticateReducer,
        product:productSlice
    }

})

export default store;
