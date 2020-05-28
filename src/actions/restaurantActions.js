import { fetchAllRestaurants, fetchAreaRestaurants, fetchRestaurantById, fetchAllRestaurantSearch, fetchAreaRestaurantSearch } from '../services/restaurants-api';

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

export const RESET_RESTAURANT = 'RESET_RESTAURANT';
export const resetRestaurant = () => ({
  type: RESET_RESTAURANT, 
  payload: {} 
});

export const SEARCH_ALL_RESTAURANT = 'SEARCH_ALL_RESTAURANT';
export const searchAllRestaurant = (name, category) => dispatch => {
  return fetchAllRestaurantSearch(name, category)
    .then(res => {
      dispatch({
        type: SEARCH_ALL_RESTAURANT,
        payload: res
      });
    });
};

export const SEARCH_AREA_RESTAURANT = 'SEARCH_AREA_RESTAURANT';
export const searchAreaRestaurant = (name, category, quadrant) => dispatch => {
  return fetchAreaRestaurantSearch(name, category, quadrant)
    .then(res => {
      dispatch({
        type: SEARCH_AREA_RESTAURANT,
        payload: res
      });
    });
};

