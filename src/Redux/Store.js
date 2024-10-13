
//old use

// import {createStore}  from "redux"
// // import counterReducer from "../Redux/Reducer/counterReducer"     //for single reducer
// import rootReducer from "./Reducer"

// const store = createStore(
//     // counterReducer
//     rootReducer
// )

// export default store

//new use 

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";

const store = configureStore({
    reducer:{
        counterReducerThroughSlice : counterSlice
    }
})

export default store;