import React, { useEffect, useState } from 'react';
import OfferingDetail from '../6_OfferingDetail/OfferingDetail';

import PollCarousel from '../5_PollDetail/PollCarousel';
import { useRestaurant } from '../../hooks/restaurantHooks';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { addUserFavorite, setUserFavorites, deleteUserFavorite } from '../../actions/userProfileActions';
import { useCurrentUser } from '../../hooks/authHooks';
import { getUserFavorites } from '../../selectors/userProfileSelectors';
import styles from './RestaurantDetail.css';

export default function RestaurantDetail() {
  const { restaurant, offerings, polls, pageLat, pageLng, loading } = useRestaurant();
  const dispatch = useDispatch();
  
  // REFACTOR TO HOOK
  const user = useCurrentUser();
  const favorites = useSelector(getUserFavorites);
  const [bizOfferings, setBizOfferings] = useState([]);
  
  // REFACTOR TO HOOK?
  useEffect(() => {
    if(user) {
      dispatch(setUserFavorites(user));
    } 
  }, [user]);

  useEffect(() => {
    if(restaurant.offerings) {   
      const offeringFilter = restaurant.offerings.filter(offering => { 
        const pickUpDate = new Date(offering.pickUpDate);
        const today = new Date();
        if(pickUpDate > today) return offering;
        else return null;
      });
      setBizOfferings(offeringFilter);
    }
  }, [restaurant]);

  const offeringNodes = offerings.map(offering => {
    return (<OfferingDetail offering={offering} restaurant={restaurant} key={offering._id}/>);
  });

  const conditionalMap = () => {
    if(pageLat) {
      const center = {
        lat: pageLat,
        lng: pageLng
      };
      return (
        <div style={{ height: '100%', width: '100%' }}>
          <Map center={center} zoom={zoom} markers={{ restaurants: [restaurant], anchorPoint: {} }}/>
        </div>
      );
    } else {
      return (
        'loading'
      );
    }
  };

  const isLoading = () => {
    if(loading) {
      return (
        <div className={styles.RestaurantMain}>  
          <h2>Loading...</h2>      
        </div>
      );
    } else {
      return (
        <div className={styles.RestaurantLists}>
          <div className={styles.RestaurantMain}>  
            <h2>Live Votes</h2>      
            <div className={styles.Items}>
              <PollCarousel polls={polls}/>
            </div> 
          </div>
          <div className={styles.RestaurantMain}>
            <h2>Current Offerings</h2>
            <div className={styles.Items}>
              {offeringNodes.length > 0 ? <ul>{offeringNodes}</ul> : <h3>No current offerings...</h3>}
            </div>
          </div>
        </div>
      );
    }
  };

  const zoom = 15;

  // REFACTOR TO HOOK?
  const addFavorite = () => {
    if(!favorites) return;
    if(!user) return;
    dispatch(addUserFavorite(user, restaurant));
  };

  // REFACTOR TO HOOK?
  const removeFavorite = (match) => {
    if(!favorites) return;
    if(!user) return;
    dispatch(deleteUserFavorite(match._id));
  };

  // Refactor
  const favoritesButton = () => {
    const match = favorites.find(favorite => favorite.restaurant._id === restaurant._id); 
    if(!user) return null;
    if(!match) return <button onClick={addFavorite} className={styles}>Add to Favorites</button>;
    if(match) return <button onClick={() => removeFavorite(match)} className={styles.buttonAlt}>Remove from Favorites</button>;
  };


  return (
    <article className={styles.RestaurantDetail}>
      <div className={styles.RestaurantTop}>
        <div className={styles.Contents}>
          <Link to={`/portland/${restaurant.quadrant}`}>Back to {restaurant.quadrant}</Link>
          <h2>{restaurant.restaurantName}</h2>
          {favoritesButton()}
          
          <h3>{restaurant.category}</h3>
          

          <h3>
            <a href={`tel:+${restaurant.phoneNumber}`}>{restaurant.phoneNumber}</a>
          </h3>
          <ul>
            <li>{restaurant.address ? restaurant.address.streetAddress : ''}</li>
            <li>
              <span>{restaurant.address ? `${restaurant.address.city}, ` : ''}</span>
              <span>{restaurant.address ? `${restaurant.address.state} ` : ''}</span>
              <span>{restaurant.address ? restaurant.address.zipcode : ''}</span>
            </li>
          </ul>
          <p>{restaurant.description}}</p>
        </div>
        <div className={styles.Map}>
          {conditionalMap()}
        </div>
      </div>
      {isLoading()}
    </article>
  );
}


