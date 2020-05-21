import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUser } from '../../../selectors/authSelectors';

const PrivateRoute = (props) => {
  const user = useSelector(getAuthUser);

  if(!user) {
    return <Redirect to="/signup" />
  }
  
  return <Route {...props} />;
};

export default PrivateRoute;