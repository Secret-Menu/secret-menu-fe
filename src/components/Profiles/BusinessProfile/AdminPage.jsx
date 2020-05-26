import React, { useEffect } from 'react';
import { useRestaurant } from '../../../hooks/restaurantHooks';
import AllPolls from './Polls/AllPolls';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CurrentOfferings from './Offerings/CurrentOfferings';
import { useCurrentUser } from '../../../hooks/authHooks';

const AdminPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();


  
  return (
    <div>
      <h3>Upcoming Orders</h3>
      {/* <UpcomingOrders /> */}
      <button>View All Orders</button>

      <h3>Current Offerings</h3>
      <CurrentOfferings />
      <button>View All Offerings</button>

      <button>View Polls</button>
      {/* <AllPolls /> */}
      <button>Add a Poll</button>
    </div>
  );
};

export default AdminPage;
