import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducer"

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },

})

export default store;