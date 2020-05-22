import { fetchRestaurantById } from '../services/restaurant-api';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const setRestaurant = (id) => dispatch => {
  return fetchRestaurantById(id)
    .then(res => {
      dispatch({ type: SET_RESTAURANT, payload: res });
    });
};
