import {createSlice} from "@reduxjs/toolkit";
import {processors} from "../../js/processors";

const initialState = {
    title: '',
}

export const createPostSlice = createSlice({
    name: 'create-post',
    initialState: processors.deepCopy(initialState),
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        },
        clearAll: (state) => {
            state = processors.deepCopy(initialState);
        }
    }
})

export const { setTitle, setContent, clearAll } = createPostSlice.actions;

export const selectTitle = (state) => state.create_post.title;
export const selectContent = (state) => state.create_post.content;

export default createPostSlice.reducer;