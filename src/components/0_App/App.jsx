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
import Quadrant from '../3_Quadrant/Quadrant';
import RestaurantDetail from '../4_RestaurantDetail/RestaurantDetail';
import Header from '../Header/Header';
import Order from '../Order/Order';
import OrderCalendar from '../OrderCalendar/OrderCalendar';

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const orders = [
  {
    info: 'Chris\' Bamboo Grove',
    date: new Date(2020, 4, 19)
  },
  {
    info: 'Hannah\'s Hummus',
    date: new Date(2020, 4, 22)
  },
  {
    info: 'Josh\'s Vegan Palace',
    date: new Date(2020, 4, 26)
  },
  {
    info: 'Ciao Bella',
    date: new Date(2020, 4, 26)
  },
  {
    info: '7-11',
    date: new Date(2020, 4, 27)
  }
];

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/restaurant/:id" component={RestaurantDetail} />
            <Route exact path="/portland/:area" component={Quadrant} />
            <Route exact path="/portland" component={PDXMap} />
            <Route path="/checkout" component={Order} />
            <Route path="/signup" component={SignUp} />
            <Route path="/restaurant-reg" component={RestaurantSignUp} />
            <Route path="/login" component={LogIn} />
            <Route exact path="/" component={CrowdPleaser} />
          </Switch>
          <OrderCalendar orders={orders}/>
        </Router>
      </div>
    </Elements>
  );
}
