import { RouteConfigComponentProps } from 'react-router-config';
import { match, useRouteMatch } from 'react-router-dom';
import { ReactElement, useContext } from 'react';
import { AppContext } from '../about';
interface RouteParams extends RouteConfigComponentProps{
  someProp?: string,
  id?: number
}
interface MatchParams extends match{
  params: {
    aboutid?: string
  }
}

const AboutChild = (props: RouteParams): ReactElement =>{
  const matchParams: MatchParams = useRouteMatch();
  const appContext = useContext(AppContext);
  return (
  <div>
    <h3>Grand Child</h3>
    <div>{ props.someProp }</div>
    <div>{ props.id }</div>
    <div>{ matchParams.params.aboutid }</div>
    <div>{ appContext.username }</div>
  </div>
  );
};

export default AboutChild;