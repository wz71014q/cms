import { ReactElement } from 'react';
import store from '@/store';
import {
  increment, decrement, incrementByAmount, fetchUserById
} from './counterSlice';
import { useState } from 'react';

const Counter = (): ReactElement => {
  const [count, setCount] = useState(0);
  store.subscribe(() => {
    const newState = store.getState().status.value;
    console.log('newState', newState);
    setCount(newState);
  });
  const handleClick = () => {
    store.dispatch(increment());
  };
  const handleIncrementByAmount = () => {
    store.dispatch(incrementByAmount(3));
  };
  const handleIncrementAsync = () => {
    fetchUserById();
    store.dispatch(decrement());
  };
  return (
    <div>
      <h1>counter</h1>
      <p>{count}</p>
      <p className="pointer" onClick={handleClick}>incremented</p>
      <p className="pointer" onClick={handleIncrementByAmount}>incrementByAmount</p>
      <p className="pointer" onClick={handleIncrementAsync}>incrementAsync</p>
    </div>
  );
};

export default Counter;