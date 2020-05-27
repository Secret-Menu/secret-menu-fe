import React, { useEffect } from 'react';
import { useRestaurant } from '../../../hooks/restaurantHooks';
import AllPolls from './Polls/AllPolls';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CurrentOfferings from './Offerings/CurrentOfferings';
import UpcomingPolls from './Polls/UpcomingPolls';
import { useCurrentUser } from '../../../hooks/authHooks';
import UpcomingOrders from '../BusinessProfile/Orders/UpcomingOrders';
import { setBusinessOrders, setBusinessOfferings, setBusinessPolls } from '../../../actions/businessActions';
import AllOrders from './Orders/AllOrders';

const AdminPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  useEffect(() => {if(user) 
    dispatch(setBusinessOrders(user.restaurant[0]._id));
    dispatch(setBusinessOfferings(user.restaurant[0]._id));
    dispatch(setBusinessPolls(user.restaurant[0]._id))
  ;}, [user]);

  return (
    <div>
      <h3>Upcoming Orders</h3>
      <UpcomingOrders />
      <Link to="/business/all-orders"> View All Orders</Link>

      <h3>Current Offerings</h3>
      <CurrentOfferings />
      <Link to="/business/all-offerings"> View All Offerings</Link>

      <h3>Live Polls</h3>
      <UpcomingPolls />
      <Link to="/business/all-polls"> View All Polls </Link>
    </div>
  );
};

export default AdminPage;
