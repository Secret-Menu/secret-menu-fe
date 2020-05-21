import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUser, getAuthLoading } from '../../../selectors/authSelectors';
import { useCurrentUser } from '../../../hooks/authHooks';

const PrivateRoute = (props) => {
  const user = useCurrentUser();
  const loading = useSelector(getAuthLoading);

  if(!user && !loading) {
    return <Redirect to="/signup" />
  }

  if(loading) {
    return <h2>Loading...</h2>
  }

  return <Route {...props} />;
};

export default PrivateRoute;
