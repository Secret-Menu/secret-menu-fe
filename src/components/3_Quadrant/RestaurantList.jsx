import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  const restaurantNodes = restaurants.map(item =>
    <Link to={`/restaurant/${item._id}`} className={styles.RestaurantLink} key={item._id}>
      <div className={styles.RestaurantCard}>
        <p>{item.restaurantName}</p>
        <img src={item.imageUrl} alt={item.restaurantName} className={styles.restaurantImg} />
      </div>
    </Link>
  )

  return (
    <div className={styles.RestaurantList}>
      {restaurantNodes}
    </div>
  );
};

export default RestaurantList;
