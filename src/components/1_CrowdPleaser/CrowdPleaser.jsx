import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import { Link } from 'react-router-dom';
import styles from './CrowdPleaser.css';

export default function CrowdPleaser() {
  const user = useCurrentUser();
  return (
    <div>
      <div className={styles.jumbotron}>
        <h2>Secret Menu</h2>
        <p>In these strange times, there's no reason you have to sacrifice good, local grub.</p>
      </div>
      {user && <h2>Hi, {user.firstName}!</h2>}
      {user && user.restaurant && <h2>Your Restaurant: {user.restaurant[0].restaurantName}</h2>}
      <Link to={'/portland'}>ENTER</Link>
      {user && user.role === 'Restaurant' && <Link to='/business'>BIZ DASHBOARD</Link>}
    </div>
  );
}
