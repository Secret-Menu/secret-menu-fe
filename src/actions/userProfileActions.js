import { fetchOrdersByUserId } from '../services/orders-api';
import { getFavorites, addFavorite, deleteFavorite } from '../services/favorites-api';

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
    .then(res => {
      dispatch({ 
        type: ADD_USER_FAVORITE, 
        payload: {
          _id: res._id,
          user: user._id,
          restaurant 
        }
      });
    });
};

export const DELETE_USER_FAVORITE = 'DELETE_USER_FAVORITE';
export const deleteUserFavorite = (favoriteId) => dispatch => {
  return deleteFavorite(favoriteId)
    .then(res => {
      dispatch({ 
        type: DELETE_USER_FAVORITE, 
        payload: res
      });
    });
};
