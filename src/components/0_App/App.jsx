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
// import PrivateRoute from '../Profiles/Auth/PrivateRoute';
import PDXMap from '../2_PDXMap/PDXMap';
import Quadrant from '../3_Quadrant/Quadrant';
import RestaurantDetail from '../4_RestaurantDetail/RestaurantDetail';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/restaurant/:id" component={RestaurantDetail} />
          <Route exact path="/portland/:area" component={Quadrant} />
          <Route exact path="/portland" component={PDXMap} />
          <Route path="/signup" component={SignUp} />
          <Route path="/restaurant-reg" component={RestaurantSignUp} />
          <Route path="/login" component={LogIn} />
          <Route exact path="/" component={CrowdPleaser} />
        </Switch>
      </Router>
    </div>
  );
}
