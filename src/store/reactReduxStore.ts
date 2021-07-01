import { Dispatch } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
// Define a type for the slice state
interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

const counterSliceStore = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
const { incremented, decremented, incrementByAmount } = counterSlice.actions;
const incrementAsync = (amount: number) => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 3000);
};

export type RootState = ReturnType<typeof counterSliceStore.getState>
export type AppDispatch = typeof counterSliceStore.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const selectCount = (state: RootState): number => state.counter.value;

export { counterSliceStore, incremented, decremented, incrementAsync, selectCount, incrementByAmount };
