import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/authHooks';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import logo from '../../assets/mainLogo.png';
import { toast } from 'react-toastify';
import styles from './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  const handleLogOut = () => {
    dispatch(logout());
    return toast('👋 Thanks for stopping by!');
  };
  
  return (
    <div>
      <img src={logo} alt="Crowd Pleaser Logo" className={styles.logo} style={{ height: '100px' }}></img>
      <div>
        
      </div>
      <Link to="/"> <button>Home</button> </Link>
      <Link to="/portland"> <button>Restaurants</button> </Link>
      { user && <Link to="/checkout"><button>Cart</button></Link>}
      { user && <Link to={`/user/${user._id}`}> <button>Profile</button> </Link> }
      <Link to="/about"> <button>meet the devs</button> </Link>
      { user &&  <Link to="/"><button onClick={handleLogOut}>Log Out</button> </Link> }
      { !user && <LogInSignUp />}
    </div>
  );
};


export default Header;
