import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {

  const restaurantsCopy = restaurants.slice();

  const shuffle = restaurantsCopy => {
    let ctr = restaurantsCopy.length, temp, index;
    while (ctr > 0) {// Pick a random index
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = restaurantsCopy[ctr];
        restaurantsCopy[ctr] = restaurantsCopy[index];
        restaurantsCopy[index] = temp;
    };
    return restaurantsCopy;
};

console.log(shuffle(restaurantsCopy));

  // if(restaurants.length > 5) {

  // }
  const restaurantNodes = restaurants.map(item =>
  <li key={item._id}>
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
