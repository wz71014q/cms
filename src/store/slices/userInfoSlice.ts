import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserById } from '@/service/client';

const initialState = {
  userId: '',
  status: 'idle',
  error: ''
};

export const fetchUserInfo = createAsyncThunk('', async () => {
  try {
    const response = await fetchUserById();
    const userId = response.data.data.userId;
    return userId;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
});

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    postUpdated(state, action) {
      state.userId = action.payload;
    }
  },
  extraReducers: {
    [fetchUserInfo.pending.type]: (state) => {
      state.status = 'loading';
    },
    [fetchUserInfo.fulfilled.type]: (state, action) => {
      state.status = 'succeeded';
      state.userId = action.payload;
    },
    [fetchUserInfo.rejected.type]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { postUpdated } = userInfoSlice.actions;

export default userInfoSlice.reducer;
