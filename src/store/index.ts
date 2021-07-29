import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/store/slices/counterSlice';
import userInfoSlice from '@/store/slices/userInfoSlice';

const store = configureStore({
  reducer: {
    countStatus: counterSlice,
    userInfo: userInfoSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
