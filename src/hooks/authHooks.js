import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/authActions';
import { getAuthError, getAuthLoading } from '../selectors/authSelectors';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleChange = ({ target }) => {
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'role') setRole(target.value);
  }

  const handleSignUp = event => {
    event.preventDefault();
    dispatch(signup(firstName, lastName, email, password, role))
  };

  return {
    error,
    loading,
    firstName,
    lastName,
    email,
    password,
    handleChange,
    handleSignUp
  };
};