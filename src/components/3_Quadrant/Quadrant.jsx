import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaAction } from '../../actions/restaurantActions';
import { getAreaSelector } from '../../selectors/restaurantSelectors';
import { useParams } from 'react-router-dom';

export default function Quadrant(){
  // const [restaurants, setRestaurants] = useState([]);
  const dispatch = useDispatch();
  const { area } = useParams();
  const restaurants = useSelector(getAreaSelector);
  useEffect(() => {
    dispatch(getAreaAction(area));
  }, []);

  console.log(restaurants);

  return (
    <div>
      <h2>Quadrant Page</h2>
    </div>
  );
}
