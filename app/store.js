import {configureStore} from "@reduxjs/toolkit";

import postReducer from '../features/postSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            post: postReducer
        }
    })
}

const store = makeStore();

export default store;