import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import { Link } from 'react-router-dom';

export default function CrowdPleaser() {
  const user = useCurrentUser();
  return (
    <div>
      {user && <h2>Hi, {user.firstName}!</h2>}
      {user && user.restaurant && <h2>Your Restaurant: {user.restaurant[0].restaurantName}</h2>}
      <h1>Welcome to Secret Menu...</h1>
      <Link to={'/portland'}>ENTER</Link>
<<<<<<< HEAD
      <Link to={'/business'}>ENTER</Link>
=======
      {user && user.role === 'Restaurant' && <Link to='/business'>BIZ DASHBOARD</Link>}
>>>>>>> ce3ae1121625d2831a3756979a71a2193a274766
    </div>
  );
}
