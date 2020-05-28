import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART, LOAD_CART } from '../actions/cartActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((lineItem, i) => i !== action.payload);
    case UPDATE_CART_ITEM:
      return state.map((lineItem, i) => {
        if(i === action.payload.index) return action.payload.lineItem;
        return lineItem;
      });
    case LOAD_CART:
      return state = action.payload;
    default:
      return state;
  }
}
