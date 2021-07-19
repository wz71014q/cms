import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/styles/common.scss';
import routes from '@/router';
import { renderRoutes } from 'react-router-config';
import Loading from '@/components/Loading';
import ErrorBoundary from '@/components/ErrorBoundary';
import store from '@/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            {renderRoutes(routes)}
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
