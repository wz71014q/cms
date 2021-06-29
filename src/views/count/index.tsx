import { ReactElement } from 'react';
import store, { counterSliceStore, incremented } from '@/store';

const About = (): ReactElement => {
  const handleClick = () => {
    store.dispatch({ type: 'counter/decremented' });
    counterSliceStore.dispatch(incremented());
    console.log('store', store.getState());
    console.log('counterSliceStore', counterSliceStore.getState());
  };
  return (
    <div>
      <h1>count</h1>
      <p className="pointer" onClick={() => handleClick()}>decremented</p>
    </div>
  );
};

export default About;