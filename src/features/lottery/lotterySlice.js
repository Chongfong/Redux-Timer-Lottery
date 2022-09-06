import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  lottery: 0,
};

export const lotterySlice = createSlice({
  name: 'lottery',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    winLottery: (state, action) => {
      state.lottery = action.payload;
    },
  },
});

export const {
  getData, winLottery,
} = lotterySlice.actions;

export default lotterySlice.reducer;
