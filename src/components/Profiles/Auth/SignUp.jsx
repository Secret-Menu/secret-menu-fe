import React from 'react';
import { useSignUp } from '../../../hooks/authHooks';
import styles from './Styling.css';

export default function SignUp() {
  const {
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
    <div className={styles.Form}>
      <h2>Sign Up</h2>
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
    </div>
  );
}
