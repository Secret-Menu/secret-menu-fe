import { fetchOrdersByUserId } from '../services/orders-api';

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
