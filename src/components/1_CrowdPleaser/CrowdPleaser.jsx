import React, { useEffect } from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import { Link } from 'react-router-dom';
import styles from './CrowdPleaser.css';
import { useDispatch } from 'react-redux';
import { getAllRestaurants } from '../../actions/restaurantActions';

export default function CrowdPleaser() {
  const user = useCurrentUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  return (
    <div>
      <div className={styles.jumbotron}>
        <h2>Secret Menu</h2>
        <p className={styles.subHeading}>In these strange times, there's no reason you have to sacrifice on delicious, local PDX cuisine.</p>
      </div>
      {user && <h2>Hi, {user.firstName}!</h2>}
      {user && user.restaurant && <h2>Your Restaurant: {user.restaurant[0].restaurantName}</h2>}
      <Link to={'/portland'}>ENTER</Link>
      <Link to={'/business'}>ENTER</Link>
      {user && user.role === 'Restaurant' && <Link to='/business'>BIZ DASHBOARD</Link>}
    </div>
  );
}
