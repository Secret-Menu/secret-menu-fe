import React from 'react';
// import { useCurrentUser } from '../../hooks/authHooks';
import { Link } from 'react-router-dom';

export default function CrowdPleaser() {
  // const user = useCurrentUser();
  return (
    <div>
      <h1>Welcome to Secret Menu...</h1>
      <Link to={'/portland'}>ENTER</Link>
    </div>
  );
}
