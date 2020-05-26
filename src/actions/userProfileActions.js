import { fetchOrdersByUserId } from '../services/orders-api';
import { getFavorites, addFavorite } from '../services/favorites-api';

export const SET_USER_ORDERS = 'SET_USER_ORDERS';
export const setUserOrders = (id) => dispatch => {
  return fetchOrdersByUserId(id)
    .then(res => {
      dispatch({ 
        type: SET_USER_ORDERS, 
        payload: res 
      });
    });
};

export const SET_USER_FAVORITES = 'SET_USER_FAVORITES';
export const setUserFavorites = () => dispatch => {
  return getFavorites()
    .then(res => {
      dispatch({ 
        type: SET_USER_FAVORITES, 
        payload: res 
      });
    });
};

export const ADD_USER_FAVORITE = 'ADD_USER_FAVORITE';
export const addUserFavorite = (user, restaurant) => dispatch => {
  return addFavorite(user, restaurant)
    .then(() => {
      dispatch({ 
        type: ADD_USER_FAVORITE, 
        payload: {
          user: user._id,
          restaurant 
        }
      });
    });
};
