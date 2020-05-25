import React from 'react';
import { useRestaurant } from '../../../hooks/restaurantHooks';
import AllPolls from './Polls/AllPolls';
import { Link } from 'react-router-dom';


const AdminPage = () => {

  const { restaurant, offerings, polls, pageLat, pageLng, loading } = useRestaurant();
  const user = useCurrentUser();
  
  return (
    <div>
      <h3>Upcoming Orders</h3>
      {/* <BUpcomingOrders /> */}

      <Link to="//ALL_BUSINESS_POLLS_DISPLAY"> <button>View Polls</button> </Link>
      <AllPolls />
    </div>
  );
};


export default AdminPage;
