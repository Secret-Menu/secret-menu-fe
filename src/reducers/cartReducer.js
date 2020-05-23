import { SET_CART, UPDATE_CART, REMOVE_FROM_CART } from '../actions/cartActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((lineItem, i) => i !== action.payload);
    default:
      return state;
  }
}