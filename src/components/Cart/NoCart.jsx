import React from 'react';
import { Link } from 'react-router-dom';

export default function NoCart() {
  return (
    <h2>You have no items in your cart - go browser some <Link to="/portland">Restaurants</Link>!</h2>
  )
};