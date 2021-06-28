import { useHistory } from 'react-router-dom';
import { ReactElement } from 'react';
import routes from '@/router';
import './index.scss';

const Home = (): ReactElement => {
  const history = useHistory();
  const handleClick = (path: string) => {
    history.push(`/${path}`);
  };
  const routeList = routes.map((r, index) => {
    if (r.path === '/') {
      return false;
    }
    return (<li key={index} onClick={() => handleClick(r.name)}>{r.name}</li>);
  });
  return (
    <div className='home'>
      <h1>Home</h1>
      <ul className='home-ul'>
        {routeList}
      </ul>
    </div>
  );
};

export default Home;
