import { SET_USER_ORDERS } from '../actions/orderActions';

const initialState = {
  userOrders: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ORDERS:
      return { ...state, userOrders: action.payload };
    default:
      return state;
  }
}
