import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundPage = () => {
  <Navigate to="/" replace />;

  return <div> Not Found Page</div>;
};

export default NotFoundPage;
