import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/authHooks';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import logo from '../../assets/mainLogo.png';
import { toast } from 'react-toastify';

const Header = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  const handleLogOut = () => {
    dispatch(logout());
    return toast('👋 Thanks for stopping by!');
  };
  
  return (
    <div>
      <img src={logo} alt="Crowd Pleaser Logo" style={{ height: '100px' }}></img>
      <Link to="/"> <button>Home</button> </Link>
      <Link to="/portland"> <button>Restaurants</button> </Link>
      { user && <Link to={`/user/${user._id}`}> <button>Profile</button> </Link> }
      { user &&  <Link to="/"><button onClick={handleLogOut}>Log Out</button> </Link> }
      { !user && <LogInSignUp />}
    </div>
  );
};


export default Header;
