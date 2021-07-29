import { createSlice } from '@reduxjs/toolkit';
import axiosRequest, { baseAxiosRequestConfig } from '@/service';
import { userId } from '@/service/api';

export const counterSlice = createSlice({
  name: 'status',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

const fetchUserById = async (): Promise<void> => {
  const options: baseAxiosRequestConfig = {
    method: 'GET',
    url: userId
  };
  try {
    const user = await axiosRequest(options);
    const userId = user.data.data.userId;
    console.log(user, userId);
    // dispatch(incrementByAmount(userId));
  } catch (err) {
    console.error(err);
  }
};

const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
export { increment, decrement, incrementByAmount, fetchUserById };
