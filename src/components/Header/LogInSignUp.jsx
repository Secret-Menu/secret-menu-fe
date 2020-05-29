import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BHeader.css';

const LogInSignUp = () => {
  return (
    <>  
      <Link to="/login"> <button className={styles.Login} type="button">Log In</button> </Link>
      <Link to="/signup"> <button className={styles.Login} >SignUp</button> </Link>   
    </>
  );
};

export default LogInSignUp;



