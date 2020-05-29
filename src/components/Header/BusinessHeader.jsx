import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/authHooks';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import logo from '../../assets/mainLogo.png';
import { toast } from 'react-toastify';
import styles from './BHeader.css';
import { FaInfoCircle } from 'react-icons/fa';

const BusinessHeader = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  
  const handleLogOut = () => {
    dispatch(logout());
    sessionStorage.clear();
    dispatch({ type: 'LOGOUT' });
    return toast('👋 thanks for stopping by!');
  };
  
  return (
    <div className={styles.Container}>
      <img src={logo} alt="Crowd Pleaser Logo" style={{ height: '100px' }}></img>
      <div className={styles.ALinks}>
        <div className={styles.FuncLinks}>
          <Link to="/business"> <p className={styles.Links}>Home</p> </Link>
          <Link to="/business/all-orders"><p className={styles.Links}>My Orders</p></Link>
          <Link to="/business/all-polls"> <p className={styles.Links}>My Polls</p> </Link>
          <Link to="/business/add-poll"><p className={styles.Links}>Add Poll</p></Link>
          <Link to="/business/all-offerings"> <p className={styles.Links}>My Offerings</p> </Link>
          <Link to="/business/add-offering"><p className={styles.Links}>Add Offering</p></Link>
        </div>
        <div className={styles.LoginContainer}>
          { user &&  <Link to="/"><button className={styles.Login} onClick={handleLogOut}>Log Out</button> </Link> }
          { !user && <LogInSignUp />}
          <Link to="/about"><FaInfoCircle className={styles.InfoIcon} /></Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
