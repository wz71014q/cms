import { createStore, Action } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
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
    }
  }
});

const counterSliceStore = configureStore({
  reducer: counterSlice.reducer
});
const { incremented, decremented } = counterSlice.actions;

export default store;
export { counterSliceStore, incremented, decremented };
