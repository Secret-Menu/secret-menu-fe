import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaRestaurants } from '../../actions/restaurantActions';
import { selectAreaRestaurants } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';
import { useQuadrantName } from '../../hooks/quadrantHooks';
import RestaurantList from './RestaurantList';

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(selectAreaRestaurants);

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
      </div>
      <RestaurantList restaurants={restaurants.restaurants}/>
    </div>
  );
}
