import React from 'react';
import { useLogIn, useCurrentUser } from '../../hooks/authHooks';
import LogOut from '../Profiles/LogOut';
import LogInSignUp from './LogInSignUp';



const Header = () => {

  const user = useCurrentUser();
  return (
    <header>
      <img src="LOGO" alt="Crowd Pleaser Logo"></img>
      <h1>Crowd Pleaser</h1>
      { user && <LogOut />}
      { !user && <LogInSignUp />}
    
    </header>
  );
};

export default Header;