import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/views/counter/counterSlice';
import postsReducer from '@/views/postsList/postsSlice';

const store = configureStore({
  reducer: {
    status: counterSlice,
    posts: postsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
