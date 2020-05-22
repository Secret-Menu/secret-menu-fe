import React from 'react';
import OfferingDetail from '../6_OfferingDetail/OfferingDetail';
import styles from './RestaurantDetail.css';
import PollCarousel from '../5_PollDetail/PollCarousel';
import { useRestaurant } from '../../hooks/restaurantHooks';
import { Link } from 'react-router-dom';

export default function RestaurantDetail() {
  const { restaurant, offerings, polls } = useRestaurant();

  const offeringNodes = offerings.map(offering => {
    return (<OfferingDetail offering={offering} key={offering._id}/>);
  });

  return (
    <article className={styles.RestaurantDetail}>
      <div className={styles.RestaurantTop}>
        <div className={styles.Contents}>
          <Link to={`/portland/${restaurant.quadrant}`}>{restaurant.quadrant}</Link>
          <h3>{restaurant.restaurantName}</h3>
          <img src={restaurant.imageUrl} />
          <ul>
            <li>{restaurant.address ? restaurant.address.streetAddress : ''}</li>
            <li>{restaurant.address ? restaurant.address.city : ''}</li>
            <li>{restaurant.address ? restaurant.address.state : ''}</li>
            <li>{restaurant.address ? restaurant.address.zipcode : ''}</li>
          </ul>
          <p>{restaurant.description}</p>
        </div>
        <div className={styles.Contents}>
          <h3><a href={`tel:+${restaurant.phoneNumber}`}>{restaurant.phoneNumber}</a></h3>
          <h3>{restaurant.category}</h3>
        </div>
        <div className={styles.Map}>
          MAP
        </div>
      </div>
      <div className={styles.RestaurantMain}>        
        <div className={styles.Polls}>
          <PollCarousel polls={polls}/>
        </div> 
      </div>
      <div className={styles.RestaurantMain}>
        <h2>Current Offerings</h2>
        <ul>
          {offeringNodes}
        </ul>
      </div>
    </article>
  );
}
