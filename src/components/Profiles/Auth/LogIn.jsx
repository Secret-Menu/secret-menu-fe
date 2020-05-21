import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/authActions';

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = event => {
    event.preventDefault();
    dispatch(login(email, password))
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email address" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <button>Log In</button>
      </form>
    </div>
  );
}
