import { useHistory } from 'react-router-dom';
import { useState, ReactElement, useEffect, useReducer } from 'react';
import './index.scss';

const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
};

const Home = ():ReactElement => {
  const history = useHistory();
  const handleClick = (path: string) => {
    history.push(`/${path}`);
  };
  const [count, setCount] = useState(0);
  const setCounts = () => {
    setCount(count + 1);
  };
  const initialState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);
  return (
    <div className="home">
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={setCounts}>
        Click me
      </button>
      <p>
        state.count: {state.count}
      </p>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <ul className="home-ul">
        <li onClick={() => handleClick('about')}>About</li>
        <li onClick={() => handleClick('books')}>Books</li>
      </ul>
    </div>
  );
};

export default Home;