import { Link, useRouteMatch } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
const About = ({ route }: RouteConfigComponentProps) =>{
  const match = useRouteMatch();
  return (
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
      {renderRoutes(route && route.routes, { someProp: "these extra props are optional", id: 56 })}
    </div>
  )
}

export default About;