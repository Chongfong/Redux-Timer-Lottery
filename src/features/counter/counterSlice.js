import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalSeconds: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action) => {
      state.totalSeconds = action.payload;
    },
    countDown: (state) => {
      state.totalSeconds -= 1;
    },
  },
});

export const {
  update, countDown,
} = counterSlice.actions;

export default counterSlice.reducer;
