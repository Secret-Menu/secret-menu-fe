import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from '../Profiles/Auth/SignUp';
import LogIn from '../Profiles/Auth/LogIn';
import CrowdPleaser from '../1_CrowdPleaser/CrowdPleaser';
import PrivateRoute from '../Profiles/Auth/PrivateRoute';
import pdxMap from '../2_pdxMap/pdxMap';
import AreaDetail from '../3_AreaDetail/AreaDetail';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/portland/:area" component={AreaDetail} />
          <Route exact path="/portland" component={pdxMap} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <PrivateRoute exact path="/" component={CrowdPleaser} />
        </Switch>
      </Router>
    </div>
  );
}
