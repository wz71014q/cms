import { useHistory } from 'react-router-dom';
import { ReactElement } from 'react';
import store from '@/store';

const Books = (): ReactElement => {
  store.subscribe(() => {
    console.log('listening');
  });
  const handleClick = () => {
    store.dispatch({ type: 'counter/incremented' });
    console.log(store.getState());
  };
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>Books</h1>
      <p className="pointer" onClick={() => handleClick()}>incremented</p>
      <p className="pointer" onClick={() => goBack()}>goBack</p>
    </div>
  );
};

export default Books;