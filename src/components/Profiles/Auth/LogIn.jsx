import React, { useState } from 'react';
import { postLogin } from '../../../services/auth-api';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = event => {
    event.preventDefault();
    postLogin(email, password);
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
