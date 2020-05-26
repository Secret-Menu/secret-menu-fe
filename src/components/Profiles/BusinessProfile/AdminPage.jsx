import React, { useEffect } from 'react';
import { useRestaurant } from '../../../hooks/restaurantHooks';
import AllPolls from './Polls/AllPolls';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CurrentOfferings from './Offerings/CurrentOfferings';
import { useCurrentUser } from '../../../hooks/authHooks';
import UpcomingOrders from '../BusinessProfile/Orders/UpcomingOrders';

const AdminPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();


  
  return (
    <div>
      <h3>Upcoming Orders</h3>
      <UpcomingOrders />
      <Link to="/business/orders"> <button>View All Orders</button> </Link>

      <h3>Current Offerings</h3>
      <CurrentOfferings />
      <Link to="/"> <button>View All Offerings</button> </Link>

      <h3>Live Polls</h3>
      <Link to="/"> <button>View All Polls</button> </Link>
    </div>
  );
};

export default AdminPage;
