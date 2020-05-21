import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';

export default function CrowdPleaser() {
  const user = useCurrentUser();
  return (
    <div>
      <h1>Hi, {user.firstName}! Welcome to Secret Menu...</h1>
    </div>
  );
}