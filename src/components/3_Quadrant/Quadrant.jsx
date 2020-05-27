import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaRestaurants } from '../../actions/restaurantActions';
import { selectAreaRestaurants } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';
import { useQuadrantName } from '../../hooks/quadrantHooks';
import RestaurantList from './RestaurantList';
import PollCarousel from '../5_PollDetail/PollCarousel';

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(selectAreaRestaurants);
  console.log(restaurants.restaurants);

  const quadrantPolls = restaurants.restaurants.map(restaurant => (
    restaurant.polls
  )).flat();
  console.log(quadrantPolls);

  // return state.userProfile.userOrders.map(order => {
  //   if(!order.offering) return;
  //   return order.offering.map(offering => ({
  //     ...offering,
  //     restaurant: order.restaurant,
  //     orderNumber: order.orderNumber,
  //     orderTotal: order.orderTotal,
  //     user: order.user,
  //     created_at: order.created_at
  //   }));
  // }).flat()

  const {
    quadrantName
  } = useQuadrantName(area);
  
  useEffect(() => {
    dispatch(getAreaRestaurants(area));
  }, []);



  return (
    <div>
      <h2>{quadrantName}</h2>
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
