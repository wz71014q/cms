import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserById } from '@/service/client';

const initialState = {
  posts: [],
  userId: '',
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetchUserById();
  const userId = response.data.data.userId;
  return userId;
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
    pending: (state) => {
      state.status = 'loading';
    }
    // [fetchPosts.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [fetchPosts.fulfilled]: (state, action) => {
    //   state.status = 'succeeded';
    //   state.userId = action.userId;
    // },
    // [fetchPosts.rejected]: (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.payload;
    // }
  }
});

export const { postUpdated } = postsSlice.actions;

export default postsSlice.reducer;

// export const selectAllPosts = (state: any) => state.posts.posts;

// export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId);
