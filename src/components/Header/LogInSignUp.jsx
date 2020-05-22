import React from 'react';
import LogIn from '../Profiles/Auth/LogIn';
import SignUp from '../Profiles/Auth/SignUp';
import { Link } from 'react-router-dom';

const LogInSignUp = () => {

  return (
  <>
    <Link to="/login">
      <Button>Log In</Button>
    </Link>
    <Link to="/signup">
      <Button>SignUp</Button>
    </Link>
  </>
  )
};

export default LogInSignUp;
