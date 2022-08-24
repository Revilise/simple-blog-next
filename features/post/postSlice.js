import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setPost } = postSlice.actions;

export const selectPost = (state) => state.post;

export default postSlice.reducer;