import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
const Books = () =>{
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  console.log(location, match);
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h1 onClick={() => goBack()}>Books</h1>
    </div>
  );
};

export default Books;