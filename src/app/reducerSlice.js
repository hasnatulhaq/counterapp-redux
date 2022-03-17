import { createSlice } from "@reduxjs/toolkit";

export const redSlice = createSlice({
        name : 'counter',
        initialState: {
            value: 0,
          },
        reducers: {
            increment: (state) => {
             state.value += 1;
            },
            decrement: (state) => {
              state.value -= 1;
            },
          },
})

export const { increment, decrement} = redSlice.actions;
//export const selectCount = state => state.counter.value;
export default redSlice.reducer;
