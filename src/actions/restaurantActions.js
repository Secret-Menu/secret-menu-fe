import { fetchAllRestaurants, fetchAreaRestaurants, fetchRestaurantById } from '../services/restaurants-api';

export const GET_ALL = 'GET_ALL';
export const getAllRestaurants = (area) => dispatch => {
  return fetchAllRestaurants(area)
    .then(res => {
      dispatch({
        type: GET_ALL,
        payload: res
      });
    });
};

export const GET_AREA = 'GET_AREA';
export const getAreaRestaurants = (area) => dispatch => {
  return fetchAreaRestaurants(area)
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
