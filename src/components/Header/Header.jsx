import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import { logOut } from '../Profiles/LogOut';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
//import logout action



const Header = () => {

  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  const handleLogOut = () => {
    
  }
  
  return (
    <div>

      <img src="LOGO" alt="Crowd Pleaser Logo"></img>
      <Link to="/"> <button>Home</button> </Link>
      {/* not sure what our all restaurant route is */}
      <Link to="/portland"> <button>Restaurants</button> </Link>
      <h1>Crowd Pleaser</h1>
      { user && <Link to="/"> <button onClick={logOut}>Log Out</button> </Link>}
      { !user && <LogInSignUp />}
      
    </div>
  );
};

export default Header;