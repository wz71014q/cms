import { ReactElement } from 'react';
import {
  counterSliceStore,
  incremented,
  incrementByAmount,
  useAppSelector,
  incrementAsync
} from '@/store/reactReduxStore';

const About = (): ReactElement => {
  const count = useAppSelector(state => state.counter.value);
  const handleClick = () => {
    counterSliceStore.dispatch(incremented());
  };
  const handleIncrementByAmount = () => {
    counterSliceStore.dispatch(incrementByAmount(3));
  };
  const handleIncrementAsync = () => {
    counterSliceStore.dispatch(incrementAsync(5));
  };
  return (
    <div>
      <h1>count</h1>
      <h1>{count}</h1>
      <p className="pointer" onClick={() => handleClick()}>incremented</p>
      <p className="pointer" onClick={() => handleIncrementByAmount()}>incrementByAmount</p>
      <p className="pointer" onClick={() => handleIncrementAsync()}>incrementAsync</p>
    </div>
  );
};

export default About;