import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';

const Home = () =>{
  const history = useHistory();
  const handleClick = (path: string) => {
    history.push(`/${path}`);
  };
  const [count, setCount] = useState(0);
  const setCounts = () => {
    setCount(count + 1);
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCounts()}>
        Click me
      </button>
      <ul className="home-ul">
        <li onClick={() => handleClick('about')}>About</li>
        <li onClick={() => handleClick('books')}>Books</li>
      </ul>
    </div>
  );
};

export default Home;