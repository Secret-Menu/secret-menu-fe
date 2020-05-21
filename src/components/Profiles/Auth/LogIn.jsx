import React from 'react';

export default function LogIn() {
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
