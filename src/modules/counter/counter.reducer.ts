import {createSlice} from "@reduxjs/toolkit";

type CounterState = {
    count: number
}

const INITIAL_STATE: CounterState = {
    count: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        }
    }
})

export const {increment} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;