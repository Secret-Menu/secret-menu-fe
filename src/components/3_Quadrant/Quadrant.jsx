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

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(selectAreaRestaurants);
  console.log(restaurants.restaurants.length);

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
      <h2>{quadrantName}</h2>
      <p>Restaurants: {restaurants.restaurants.length}</p>
      <p>Live Polls: {quadrantPolls.length}</p>
      <p>Other Info: <QuadrantDescription quadrant={quadrantName}/> </p>
      <div style={{ height: '60vh', width: '33%' }}>
        {restaurants.anchorPoint.zoom && 
        <Map center={restaurants.anchorPoint.center} zoom={restaurants.anchorPoint.zoom} markers={restaurants} />}
        {console.log(restaurants.anchorPoint.center)}
      </div>
      <div>
        <PollCarousel polls={quadrantPolls}/>
      </div>
      <RestaurantList restaurants={restaurants.restaurants}/>
    </div>
  );
}
