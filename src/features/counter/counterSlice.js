import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  ///STORE
  name: "counter",
  initialState: {
    value: 0,
  },
  //REDUCER
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setToZero: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      console.log(action, "this is payload");
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      console.log(action, "this is payload");
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  setToZero,
  incrementByAmount,
  decrementByAmount,
} = slice.actions;
console.log(slice.actions, "these are actions");
console.log(slice.reducer, "these are reducers");

// The function below is called a selector and allows us to select a value from
// the state.
export const selectCount = (state) => state.counter.value;
export default slice.reducer;
