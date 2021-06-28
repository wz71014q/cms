import { ReactElement } from 'react';
import store from '@/store';

const About = (): ReactElement => {
  store.subscribe(() => console.log(store.getState()));
  store.dispatch({ type: 'counter/incremented' });
  store.dispatch({ type: 'counter/incremented' });
  store.dispatch({ type: 'counter/decremented' });
  return (
    <div>
      <h1>count</h1>
    </div>
  );
};

export default About;