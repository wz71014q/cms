import { createStore, Action } from 'redux';

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

export default store;
