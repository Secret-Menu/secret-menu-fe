import { SET_CART, UPDATE_CART, REMOVE_FROM_CART } from '../actions/cartActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((lineItem, i) => i !== action.payload);
    case UPDATE_CART_ITEM:
      return state.map((lineItem, i) => {
        if(i === action.payload.index) return action.payload.lineItem
      });
    default:
      return state;
  }
}