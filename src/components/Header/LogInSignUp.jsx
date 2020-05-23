import React from 'react';
import { Link } from 'react-router-dom';


const LogInSignUp = () => {

  return (
  <>
  
  <Link to="/login"> <button type="button">Log In</button> </Link>
  <Link to="/signup"> <button>SignUp</button> </Link>

    
  </>
  )
};

export default LogInSignUp;



