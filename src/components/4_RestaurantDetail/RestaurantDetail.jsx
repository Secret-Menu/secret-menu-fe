import React, { useEffect } from 'react';
import OfferingDetail from '../6_OfferingDetail/OfferingDetail';
import styles from './RestaurantDetail.css';
import PollCarousel from '../5_PollDetail/PollCarousel';
import { useRestaurant } from '../../hooks/restaurantHooks';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { addUserFavorite, setUserFavorites, deleteUserFavorite } from '../../actions/userProfileActions';
import { useCurrentUser } from '../../hooks/authHooks';
import { getUserFavorites } from '../../selectors/userProfileSelectors';

export default function RestaurantDetail() {
  const { restaurant, offerings, polls, pageLat, pageLng, loading } = useRestaurant();
  const dispatch = useDispatch();
  
  // REFACTOR TO HOOK
  const user = useCurrentUser();
  const favorites = useSelector(getUserFavorites);

  // REFACTOR TO HOOK?
  useEffect(() => {
    if(user) {
      dispatch(setUserFavorites(user));
    } 
  }, [user]);

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
          <Map center={center} zoom={zoom} markers={{ restaurants: [restaurant] }}/>
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
        <>
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
        </>
      );
    }
  };

  const zoom = 14;

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

  const favoritesButton = () => {
    const match = favorites.find(favorite => favorite.restaurant._id === restaurant._id); 
    if(!match) return <button onClick={addFavorite}>Add to Favorites</button>;
    if(match) return <button onClick={() => removeFavorite(match)}>Remove from Favorites</button>;
  };

  return (
    <article className={styles.RestaurantDetail}>
      <div className={styles.RestaurantTop}>
        <div className={styles.Contents}>
          <Link to ='/checkout'>Checkout</Link>
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
          {favoritesButton()}
        </div>
        <div className={styles.Map}>
          {conditionalMap()}
        </div>
      </div>
      {isLoading()}
    </article>
  );
}
