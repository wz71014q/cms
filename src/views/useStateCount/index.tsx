import { useState, ReactElement, useEffect } from 'react';

const UseStateCount = (): ReactElement => {
  const [count, setCount] = useState(0);
  const setCounts = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);
  return (
    <div className='useStateCount'>
      <h1>UseStateCount</h1>
      <p>You clicked {count} times</p>
      <button onClick={setCounts}>Click me</button>
    </div>
  );
};

export default UseStateCount;
