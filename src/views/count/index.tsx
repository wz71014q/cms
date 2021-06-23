import React, { ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

export const AppContext = React.createContext({ username: 'superawesome' });

const About = ({ route }: RouteConfigComponentProps): ReactElement =>{
  const match = useRouteMatch();
  return (
    <AppContext.Provider value={{ username: 'superawesome' }}>
      <div>
        <h1>About</h1>
        <ul>
          <li>
          <Link to={`${match.url}/About1`}>About1</Link>
          </li>
          <li>
          <Link to={`${match.url}/About2`}>About2</Link>
          </li>
        </ul>
        {renderRoutes(route && route.routes, {
          someProp: "these extra props are optional",
          id: 56
        })}
      </div>
    </AppContext.Provider>
  );
};

export default About;