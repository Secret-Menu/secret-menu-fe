import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaAction } from '../../actions/restaurantActions';
import { getAreaSelector } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';

export default function Quadrant(){
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(getAreaSelector);
  // console.log(restaurants);

  const center = {
    lat: 45.52, 
    lng: -122.67,
  };
  const zoom = 12;
  
  useEffect(() => {
    dispatch(getAreaAction(area));
  }, []);

  return (
    <div>
      <h2>Quadrant Page</h2>
      <div style={{ height: '60vh', width: '33%' }}>
        <Map center={center} zoom={zoom} markers={restaurants} />
      </div>
    </div>
  );
}
