import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from '../Profiles/Auth/SignUp';
import LogIn from '../Profiles/Auth/Login';
import CrowdPleaser from '../1_CrowdPleaser/CrowdPleaser';

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={CrowdPleaser} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Router>
    </div>
  )
}
