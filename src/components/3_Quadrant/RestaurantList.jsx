import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  const restaurantNodes = restaurants.map(item =>
  <>
    <Link to={`/restaurant/${item._id}`}>
    <p>{item.restaurantName}</p>
    <img src={item.imageUrl} alt={item.restaurantName} className={styles.restaurantImg} />
    </Link>
  </>);
  return (
    {restaurantNodes}
  );
};

export default RestaurantList;
