import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantList.css';
import { useRestaurantShortList } from '../../hooks/restaurantHooks';

const RestaurantListShort = ({ restaurants }) => {
  const restaurantsCopy = restaurants.slice();

  const {
    restaurantShortList
  } = useRestaurantShortList(restaurantsCopy);

  const restaurantNodes = restaurantShortList.map(item =>
    <li key={item._id}>
      <Link to={`/restaurant/${item._id}`}>
        <div>
          <p>{item.restaurantName}</p>
          <img src={item.imageUrl} alt={item.restaurantName} className={styles.restaurantImg} />
        </div>
      </Link>
    </li>
  );

  return (
    <ul>
      {restaurantNodes}
    </ul>
  );
};

export default RestaurantListShort;
