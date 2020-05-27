import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/authHooks';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import logo from '../../assets/mainLogo.png';

const BusinessHeader = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  const handleLogOut = () => {
    dispatch(logout());
  };
  
  return (
    <div>
      <img src={logo} alt="Crowd Pleaser Logo" style={{height: '100px'}}></img>
      <Link to="/"> <button>Home</button> </Link>
      <Link to="/"> <button>My Polls</button> </Link>
      <Link to="/business/add-offering"><button>Add Offering</button></Link>
      <Link to="/business/add-poll"><button>Add Poll</button></Link>
      <Link to="/"> <button>My Offerings</button> </Link>
      { user &&  <Link to="/"><button onClick={handleLogOut}>Log Out</button> </Link> }
      { !user && <LogInSignUp />}
    </div>
  );
};


export default BusinessHeader;
