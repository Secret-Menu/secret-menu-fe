import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  const restaurantNodes = restaurants.map(item =>
  <li ket={item._id}>
    <Link to={`/restaurant/${item._id}`}>
      <div>
        <p>{item.restaurantName}</p>
        <img src={item.imageUrl} alt={item.restaurantName} className={styles.restaurantImg} />
      </div>
    </Link>
  </li>);

  return (
    <ul>
      {restaurantNodes}
    </ul>
  );
};

export default RestaurantList;
