import { createStore, Action } from 'redux';

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

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'counter/incremented' });

store.dispatch({ type: 'counter/incremented' });

store.dispatch({ type: 'counter/decremented' });
