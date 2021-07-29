import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/store/slices/counterSlice';
import postsReducer from '@/store/slices/postsSlice';

const store = configureStore({
  reducer: {
    status: counterSlice,
    posts: postsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
