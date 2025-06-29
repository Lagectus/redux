import { createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, xyz: 100 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state,acn) => {
            console.log(acn);
            
            state.value -= acn.payload
        }
    }
})
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
