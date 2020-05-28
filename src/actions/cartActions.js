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

export const LOAD_CART = 'LOAD_CART';
export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: cart
});

export const RESET_CART = 'RESET_CART';
export const resetCart = () => ({
  type: RESET_CART
});
