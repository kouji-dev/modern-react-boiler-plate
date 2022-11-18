import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type HomeState = {
    text: string
}

const INITIAL_STATE: HomeState = {
    text: 'hello'
}
const homeSlice = createSlice({
    name: 'home',
    initialState: INITIAL_STATE,
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
})

export const {updateText} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;