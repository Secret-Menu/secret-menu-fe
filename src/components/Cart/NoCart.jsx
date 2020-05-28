import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoCart.css';

export default function NoCart() {
  return (
    <div className={styles.NoCart}>
      <h2>You have no items in your cart - go browse some <Link to="/portland">Restaurants</Link>!</h2>
    </div>
  )
};