import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import lotteryReducer from '../features/lottery/lotterySlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    lottery: lotteryReducer,
  },
});

export default store;
