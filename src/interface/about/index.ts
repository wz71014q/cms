import { RouteConfigComponentProps } from 'react-router-config';
import { match } from 'react-router-dom';

export interface RouteParams extends RouteConfigComponentProps{
  someProp?: string,
  id?: number
}
export interface MatchParams extends match{
  params: {
    aboutid?: string
  }
}