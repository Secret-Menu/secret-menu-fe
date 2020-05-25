import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {

  return (
    <>
      {
        restaurants
        ? restaurants.map(item =>
          <>
            <Link to={`/restaurant/${item._id}`}>
            <p>{item.restaurantName}</p>
            <img src={item.imageUrl} alt={item.restaurantName} />
            </Link>
          </>
        )
        : null
      }
    </>
  );
};

export default RestaurantList;
