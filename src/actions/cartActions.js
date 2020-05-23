export const SET_CART = 'SET_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const setCart = lineItem => {
  dispatch({
    type: SET_CART,
    payload: lineItem
  });
};

export const updateCart = lineItem => {
  dispatch({
    type: UPDATE_CART,
    payload: lineItem
  });
};

export const removeFromCart = lineItem => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: lineItem
  })
}