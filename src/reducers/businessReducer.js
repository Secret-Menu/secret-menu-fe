import { GET_BUSINESS, GET_ORDERS, GET_OFFERINGS } from '../actions/businessActions';

const initialState = {
  orders: []
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case GET_ORDERS:
      return {orders: action.payload}
    default:
      return state;
  }
}
