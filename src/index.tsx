import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/common.scss';
import routes from './router';
import { renderRoutes } from 'react-router-config';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

