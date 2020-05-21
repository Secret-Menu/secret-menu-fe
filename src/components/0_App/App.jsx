import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUp from '../Profiles/Auth/SignUp';
import LogIn from '../Profiles/Auth/Login';

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Router>
    </div>
  )
}
