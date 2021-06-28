import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/styles/common.scss';
import routes from '@/router';
import { renderRoutes } from 'react-router-config';
import Loading from '@/components/Loading';
import ErrorBoundary from '@/components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          {renderRoutes(routes)}
        </Suspense>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
