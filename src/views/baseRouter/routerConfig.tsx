import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
    </div>
  );
};
const About = () =>{
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
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};
interface RouteParams {
  topicId: string
}
function Topic() {
  const params = useParams<RouteParams>();
  return <h3>Requested topic ID: {params.topicId}</h3>;
}
const Inbox = () => {
  return (
    <div>
      <h1>Inbox</h1>
    </div>
  );
};
const NotMatch = () =>{
  return (
    <div>
      <h1>NotMatch</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route component={NotMatch} />
    </Switch>
  );
}

export default App;
