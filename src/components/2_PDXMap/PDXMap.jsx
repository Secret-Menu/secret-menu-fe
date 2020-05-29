import React, { useEffect } from 'react';
import Map from '../Map/Map';
import PDXQuadrants from './PDXQuadrants';
import { pdxAnchor } from '../../services/map-utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../../actions/restaurantActions';
import { selectAllRestaurants } from '../../selectors/restaurantSelectors';

export default function PDXMap() { 
  const dispatch = useDispatch();
  const restaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    if(!restaurants.restaurants.length) dispatch(getAllRestaurants());
  }, []);

  return (
    <div>
      <div style={{ height: '60vh', width: '100%', margin: '0 auto' }}>
        <Map center={pdxAnchor.center} zoom={pdxAnchor.zoom} markers={restaurants}/>
      </div>
      <PDXQuadrants restaurants={restaurants} />
    </div>
  );
}
