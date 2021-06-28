import { ReactElement } from 'react';
import store from '@/store';

const About = (): ReactElement => {
  store.subscribe(() => console.log(store.getState()));
  const handleClick = () => {
    store.dispatch({ type: 'counter/decremented' });
  };
  return (
    <div>
      <h1>count</h1>
      <p className="pointer" onClick={() => handleClick()}>decremented</p>
    </div>
  );
};

export default About;