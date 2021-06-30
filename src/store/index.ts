import { createStore, Action, Dispatch } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const defaultStore = { value: 0 };
function counterReducer(state = defaultStore, action: Action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

const { incremented, decremented, incrementByAmount } = counterSlice.actions;
const incrementAsync = (amount: number) => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 3000);
};

const counterSliceStore = configureStore({
  reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const selectCount = (state: RootState): number => state.value;

export { counterSliceStore, incremented, decremented, incrementAsync, selectCount };
export default store;
