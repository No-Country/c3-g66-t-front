import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user"
import SearchLocationReducer from "./slices/search/LocationReducer";
import SearchListHotelsReducer from "./slices/search/ListHotelsReducer";

export default configureStore({
    reducer:{
        user,
        SearchLocationReducer,
        SearchListHotelsReducer
    }
})

