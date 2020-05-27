import { toast } from 'react-toastify';

export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = lineItem => ({
  type: ADD_TO_CART,
  payload: lineItem
}).then(toast.success('item added to cart!'));

export const UPDATE_CART_ITEM = 'UPDATE_CART';
export const updateCartItem = (index, lineItem) => ({
  type: UPDATE_CART_ITEM,
  payload: {
    index,
    lineItem
  }
}).then(toast.success('item updated!'));

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index
}).then(toast.success('item removed!'));
