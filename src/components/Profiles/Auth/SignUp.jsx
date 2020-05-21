import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../actions/authActions';
import { getAuthError } from '../../../selectors/authSelectors';

export default function SignUp() {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleSignUp = event => {
    event.preventDefault();
    dispatch(signup(firstName, lastName, email, password, role))
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input type="text" value={firstName} onChange={({ target }) => setFirstName(target.value)} placeholder="First name" />
        <input type="text" value={lastName} onChange={({ target }) => setLastName(target.value)} placeholder="Last name" />
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email address" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Create password" />
        <label htmlFor="user">User</label>
        <input type="radio" value="User" name="role" id="user" onChange={({ target }) => setRole(target.value)} checked={role === 'User'}/>
        <label htmlFor="restaurant">Restaurant Owner</label>
        <input type="radio" value="Restaurant" name="role" id="restaurant" onChange={({ target }) => setRole(target.value)} checked={role === 'Restaurant'} />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
