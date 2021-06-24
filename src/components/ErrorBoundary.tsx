import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary:React.FC = ({children}) => {
  // 目前还没有对应getDerivedStateFromError生命周期的hook，所以函数式组件无法作错误边界
  // return <h1>Something went wrong.</h1>;
  return <div>{children}</div>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node
};
export default ErrorBoundary;
