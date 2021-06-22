import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/common.scss';
import routes from './router';
import { renderRoutes } from 'react-router-config';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

