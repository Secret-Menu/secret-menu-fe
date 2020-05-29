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
    <div className={styles.Header}>
      <div>
        <img src={logo} alt="Crowd Pleaser Logo" className={styles.logo} style={{ height: '100px' }}></img>
      </div>
      <div className={styles.NavLinks}>
      <div className={styles.LeftLinks}>
        <Link to="/"> <p>Home</p> </Link>
        <Link to="/portland"> <p>Restaurants</p> </Link>
        { user && <Link to="/checkout"><p>Cart</p></Link>}
        { user && <Link to={`/user/${user._id}`}><p> Profile </p></Link> }
      </div>
      <div className={styles.RightLinks}>  
        { user &&  <Link to="/"><button className={styles.Login} onClick={handleLogOut}>Log Out</button> </Link> }
        { !user && <LogInSignUp />}
        <Link to="/about"> <p className={styles.Meet}>Meet the Devs</p> </Link>
      </div>
      </div>
    </div>
  );
};


export default Header;
