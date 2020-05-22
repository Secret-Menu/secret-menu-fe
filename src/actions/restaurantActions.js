import { getAreaRestaurants } from '../services/restaurantFetch';
import { fetchRestaurantById } from '../services/restaurant-api';

export const GET_AREA = 'GET_AREA';
export const getAreaAction = (area) => dispatch => {
  return getAreaRestaurants(area)
    .then(res => {
      dispatch({
        type: GET_AREA,
        payload: res
      });
  });
};

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const setRestaurant = (id) => dispatch => {
  return fetchRestaurantById(id)
    .then(res => {
      dispatch({ 
        type: SET_RESTAURANT, 
        payload: res 
      });
    });
};
