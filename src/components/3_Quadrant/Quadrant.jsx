import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaRestaurants } from '../../actions/restaurantActions';
import { selectAreaRestaurants } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';
import RestaurantList from './RestaurantList';

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(selectAreaRestaurants);

  const center = {
    lat: 45.52, 
    lng: -122.685,
  };
  const zoom = 14;
  
  useEffect(() => {
    dispatch(getAreaRestaurants(area));
  }, []);

  return (
    <div>
      <h2>Quadrant Page</h2>
      <div style={{ height: '60vh', width: '33%' }}>
        <Map center={center} zoom={zoom} markers={restaurants} />
      </div>
      <RestaurantList restaurants={restaurants.restaurants}/>
    </div>
  );
}
