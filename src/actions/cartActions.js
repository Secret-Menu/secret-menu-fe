export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = lineItem => ({
  type: ADD_TO_CART,
  payload: lineItem
});

export const UPDATE_CART_ITEM = 'UPDATE_CART';
export const updateCartItem = (index, lineItem) => ({
  type: UPDATE_CART_ITEM,
  payload: {
    index,
    lineItem
  }
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index
});
