import {createSlice} from "@reduxjs/toolkit";
import {EditorState} from "draft-js";
import {emptyContentState} from "../../resorses/draftResourses";
import {processors} from "../../js/processors";

const initialState = {
    title: '',
    content: EditorState.createWithContent(emptyContentState),
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

export const selectTitle = (state) => state.title;
export const selectContent = (state) => state.content;

export default createPostSlice.reducer;