import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/views/counter/counterSlice';

export default configureStore({
  reducer: {
    status: counterSlice
  }
});
