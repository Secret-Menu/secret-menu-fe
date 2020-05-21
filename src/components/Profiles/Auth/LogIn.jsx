import React from 'react';
import { useLogIn } from '../../../hooks/authHooks';

export default function LogIn() {
  const {
    error,
    loading,
    email,
    password,
    handleChange,
    handleLogIn
  } = useLogIn();

  return (
    <div>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogIn}>
        <input type="text" value={email} name="email" onChange={handleChange} placeholder="Email address" />
        <input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" />
        <button disabled={loading}>Log In</button>
      </form>
    </div>
  );
}
