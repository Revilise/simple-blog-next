import {configureStore} from "@reduxjs/toolkit";

import postReducer from '../features/post/postSlice'
import createPostReducer from '../features/create-post/createPostSlice';

export function makeStore() {
    return configureStore({
        reducer: {
            post: postReducer,
            create_post: createPostReducer,
        }
    })
}

const store = makeStore();

export default store;