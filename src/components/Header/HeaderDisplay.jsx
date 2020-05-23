import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import BusinessHeader from './BusinessHeader';
import UserHeader from './UserHeader';

const HeaderDisplay = () => {
  const user = useCurrentUser();
  
  return (
    <>
      { user && user.role === 'Restaurant' ? <BusinessHeader /> : <UserHeader /> }
    </>
  );
};


export default HeaderDisplay;
