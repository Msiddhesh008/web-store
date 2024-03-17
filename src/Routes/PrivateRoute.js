import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    // Redirect to login or a designated unauthorized page
    return <Navigate to="/" replace />;
  }

  return <Outlet {...rest}>{children}</Outlet>;
};

export default PrivateRoute;