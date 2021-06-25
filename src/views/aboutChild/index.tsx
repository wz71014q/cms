import { RouteConfigComponentProps } from 'react-router-config';
import { match, useRouteMatch } from 'react-router-dom';
import { ReactElement, useContext, useEffect } from 'react';
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

const AboutChild = (props: RouteParams): ReactElement => {
  const matchParams: MatchParams = useRouteMatch();
  const appContext = useContext(AppContext);
  useEffect(() => {
    console.log('aboutid依赖项变更，触发新effect', matchParams.params.aboutid);
    return () => {
      console.log('组件重新渲染，清除旧effect', matchParams.params.aboutid);
    };
  }, [matchParams.params.aboutid]);
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