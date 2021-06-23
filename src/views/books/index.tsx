import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { ReactElement } from 'react';

const Books = (): ReactElement =>{
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