import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserById } from '@/service/client';

const initialState = {
  posts: [],
  userId: '',
  status: 'idle',
  error: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetchUserById();
    const userId = response.data.data.userId;
    return userId;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated(state, action) {
      state.userId = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.status = 'succeeded';
      state.userId = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
