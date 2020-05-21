import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/authActions';
import { getAuthError, getAuthLoading } from '../../../selectors/authSelectors';

export default function LogIn() {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = event => {
    event.preventDefault();
    dispatch(login(email, password))
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogIn}>
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email address" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <button disabled={loading}>Log In</button>
      </form>
    </div>
  );
}
