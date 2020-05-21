import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from '../Profiles/Auth/SignUp';
import LogIn from '../Profiles/Auth/LogIn';
import RestaurantSignUp from '../Profiles/Auth/RestaurantSignUp';
import CrowdPleaser from '../1_CrowdPleaser/CrowdPleaser';
import PrivateRoute from '../Profiles/Auth/PrivateRoute';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={CrowdPleaser} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/restaurantregister" component={RestaurantSignUp} />
        </Switch>
      </Router>
    </div>
  )
}
