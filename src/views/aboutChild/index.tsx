import { RouteConfigComponentProps } from 'react-router-config';
interface RouteParams extends RouteConfigComponentProps{
  someProp?: string,
  id?: number
}
const AboutChild = (props: RouteParams) =>{
  return (
  <div>
    <h3>Grand Child</h3>
    <div>{props.someProp}</div>
    <div>{props.id}</div>
  </div>
  );
}

export default AboutChild;