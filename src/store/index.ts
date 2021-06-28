import { createStore, Action } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

function counterReducer(state = { value: 0 }, action: Action) {
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
