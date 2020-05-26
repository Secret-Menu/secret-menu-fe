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
      {user && user.role === 'Restaurant' && <Link to='/business'>BIZ DASHBOARD</Link>}
    </div>
  );
}
