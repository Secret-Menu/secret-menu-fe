import React, { useState } from 'react';
import request from 'superagent';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleSubmit = event => {
    event.preventDefault();
    // signup function goes here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={({ target }) => setFirstName(target.value)} placeholder="First name" />
        <input type="text" value={lastName} onChange={({ target }) => setLastName(target.value)} placeholder="Last name" />
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email address" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Create password" />
        <label htmlFor="user">User</label>
        <input type="radio" value="User" name="role" id="user" checked={role === 'User'}/>
        <label htmlFor="restaurant">Restaurant Owner</label>
        <input type="radio" value="Restaurant" name="role" id="restaurant" checked={role === 'Restaurant'} />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
