import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';

export default function CrowdPleaser() {
  const user = useCurrentUser();
  return (
    <div>
      {user && <h2>Hi, {user.firstName}!</h2>}
      <h1>Welcome to Secret Menu...</h1>
    </div>
  );
}
