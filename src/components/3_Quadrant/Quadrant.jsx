import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaRestaurants } from '../../actions/restaurantActions';
import { selectAreaRestaurants } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';
import { useQuadrantName } from '../../hooks/quadrantHooks';
import RestaurantList from './RestaurantList';
import PollCarousel from '../5_PollDetail/PollCarousel';
import QuadrantDescription from './QuadrantDescription';
import styles from './Quadrant.css';

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(selectAreaRestaurants);

  const quadrantPolls = restaurants.restaurants.map(restaurant => (
    restaurant.polls
  )).flat()
    .filter(poll => { 
      const endDate = new Date(poll.end);
      const today = new Date();
      if(endDate > today) return poll;
      else return null;
    });

  const {
    quadrantName
  } = useQuadrantName(area);
  
  useEffect(() => {
    dispatch(getAreaRestaurants(area));
  }, []);

  return (
    <div>
      <div className={styles.QuadrantTop}>
        <div className={styles.QuadrantInfo}>
          <h2>{quadrantName}</h2>
          <p>Restaurants: {restaurants.restaurants.length}</p>
          <p>Live Polls: {quadrantPolls.length}</p>
          <p>
            <QuadrantDescription quadrant={quadrantName}/> 
          </p>
        </div>
        <div className={styles.QuadrantInfo}>
          <div style={{ height: '40vh', width: '80%' }}>
            {restaurants.anchorPoint.zoom && 
            <Map 
              center={restaurants.anchorPoint.center} 
              zoom={restaurants.anchorPoint.zoom} 
              markers={restaurants} 
            />}
          </div>
        </div>
      </div>
      <div className={styles.QuadrantBottom}>
        <div className={styles.QuadrantPolls}>

          <h2>Live Polls</h2>

          <PollCarousel polls={quadrantPolls}/>
        </div>
        <h2>Restaurants</h2>
        <div className={styles.QuadrantRestaurants}>
          
          <RestaurantList restaurants={restaurants.restaurants}/>
        </div>
      </div>
    </div>
  );
}
