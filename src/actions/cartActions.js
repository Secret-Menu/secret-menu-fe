export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const addToCart = lineItem => ({
  type: ADD_TO_CART,
  payload: lineItem
});

export const updateCart = (index, lineItem) => ({
  type: UPDATE_CART,
  payload: {
    index,
    lineItem
  }
});

export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index
});
