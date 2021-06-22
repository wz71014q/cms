import { useHistory } from 'react-router-dom';
import './style.less';

const Home = () =>{
  const history = useHistory();
  const handleClick = (path: string): void => {
    history.push(`/${path}`);
  }
  return (
    <div className="home">
      <h1>Home</h1>
      <ul className="home-ul">
        <li onClick={() => handleClick('About')}>About</li>
        <li onClick={() => handleClick('Books')}>Books</li>
      </ul>
    </div>
  )
}

export default Home;