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
      <h2>Upcoming Orders 
        <Link to="/business/all-orders" className={styles.ViewAll}> View All Orders</Link>
      </h2>
      <UpcomingOrders />

      <h2>Live Polls 
        <Link to="/business/all-polls" className={styles.ViewAll}> View All Polls </Link>
      </h2>
      <UpcomingPolls />
      
      <h2>Current Offerings
        <Link to="/business/all-offerings" className={styles.ViewAll}> View All Offerings</Link>
      </h2>
      <CurrentOfferings />
      
    </div>
  );
};

export default AdminPage;
