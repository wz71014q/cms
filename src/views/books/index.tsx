import { useHistory } from 'react-router-dom';
const Books = () =>{
  const history = useHistory();
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