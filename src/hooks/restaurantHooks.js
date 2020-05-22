import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../actions/restaurantActions';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../selectors/restaurantSelectors';

export const useRestaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(getRestaurant);

  useEffect(() => {
    dispatch(setRestaurant(id));
  }, []);

  return {
    id,
    restaurant
  };
};
