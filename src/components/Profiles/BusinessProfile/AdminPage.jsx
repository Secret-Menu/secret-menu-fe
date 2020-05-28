import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CurrentOfferings from './Offerings/CurrentOfferings';
import UpcomingPolls from './Polls/UpcomingPolls';
import { useCurrentUser } from '../../../hooks/authHooks';
import UpcomingOrders from '../BusinessProfile/Orders/UpcomingOrders';
import { setBusinessOrders, setBusinessOfferings, setBusinessPolls } from '../../../actions/businessActions';
import styles from './BusinessDashboard.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  useEffect(() => {if(user) 
    dispatch(setBusinessOrders(user?.restaurant[0]._id));
  dispatch(setBusinessOfferings(user?.restaurant[0]._id));
  dispatch(setBusinessPolls(user?.restaurant[0]._id))
  ;}, [user]);

  return (
    <div className={styles.BusinessDashboard}>
      <h2>Upcoming Orders</h2>
      <UpcomingOrders />
      <Link to="/business/all-orders"> View All Orders</Link>

      <h2>Current Offerings</h2>
      <CurrentOfferings />
      <Link to="/business/all-offerings"> View All Offerings</Link>

      <h2>Live Polls</h2>
      <UpcomingPolls />
      <Link to="/business/all-polls"> View All Polls </Link>
    </div>
  );
};

export default AdminPage;
