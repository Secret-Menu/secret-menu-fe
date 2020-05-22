import React from 'react';
import { useSignUp } from '../../../hooks/authHooks';
import Error from './Error';
import AreaDetail from '../../3_Quadrant/Quadrant';

export default function SignUp() {
  const {
    error,
    loading,
    firstName,
    lastName,
    email,
    role,
    password,
    handleChange,
    handleSignUp
  } = useSignUp();

  return (
    <div>
      <h2>Sign Up</h2>
      <Error error={error} />
      <form onSubmit={handleSignUp}>
        <input type="text" value={firstName} name="firstName" onChange={handleChange} placeholder="First name" />
        <input type="text" value={lastName} name="lastName" onChange={handleChange} placeholder="Last name" />
        <input type="text" value={email} name="email" onChange={handleChange} placeholder="Email address" />
        <input type="password" value={password} name="password" onChange={handleChange} placeholder="Create password" />
        <label htmlFor="user">User</label>
        <input type="radio" value="User" name="role" id="user" onChange={handleChange} checked={role === 'User'}/>
        <label htmlFor="restaurant">Restaurant Owner</label>
        <input type="radio" value="Restaurant" name="role" id="restaurant" onChange={handleChange} checked={role === 'Restaurant'} />
        <button disabled={loading}>Sign Up</button>
      </form>
      <AreaDetail />
    </div>
  );
}
