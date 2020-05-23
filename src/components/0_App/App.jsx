import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'babel-polyfill';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SignUp from '../Profiles/Auth/SignUp';
import LogIn from '../Profiles/Auth/LogIn';
import RestaurantSignUp from '../Profiles/Auth/RestaurantSignUp';
import CrowdPleaser from '../1_CrowdPleaser/CrowdPleaser';
// import PrivateRoute from '../Profiles/Auth/PrivateRoute';
import PDXMap from '../2_PDXMap/PDXMap';
import BusinessDisplay from '../Business/BusinessDisplay';
import Quadrant from '../3_Quadrant/Quadrant';
import RestaurantDetail from '../4_RestaurantDetail/RestaurantDetail';
import HeaderDisplay from '../../components/Header/HeaderDisplay';
import Order from '../Order/Order';

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <Router>
          <HeaderDisplay />
          <Switch>
            <Route path="/restaurant/:id" component={RestaurantDetail} />
            <Route exact path="/portland/:area" component={Quadrant} />
            <Route exact path="/portland" component={PDXMap} />
            <Route path="/checkout" component={Order} />
            <Route path="/signup" component={SignUp} />
            <Route path="/restaurant-reg" component={RestaurantSignUp} />
            <Route path="/business" component={BusinessDisplay} />
            <Route path="/login" component={LogIn} />
            <Route exact path="/" component={CrowdPleaser} />
          </Switch>
        </Router>
      </div>
    </Elements>
  );
}
