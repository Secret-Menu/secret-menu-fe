import React from 'react';
import { Link } from 'react-router-dom';
import { useRestaurantShortList } from '../../hooks/restaurantHooks';
import styles from './RestaurantList.css';

const RestaurantListShort = ({ restaurants }) => {
  const restaurantsCopy = restaurants.slice();

  const {
    restaurantShortList
  } = useRestaurantShortList(restaurantsCopy);

  const restaurantNodes = restaurantShortList.map(item =>
      <Link to={`/restaurant/${item._id}`}>
        <div className={styles.RestaurantCard}>
          <p>{item.restaurantName}</p>
          <img src={item.imageUrl} alt={item.restaurantName} className={styles.restaurantImg} />
        </div>
      </Link>
  );

  return (
    <div className={styles.RestaurantList}>
      {restaurantNodes}
    </div>
  );
};

export default RestaurantListShort;
