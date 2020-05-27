import { ADD_OFFERING, ADD_POLL, SET_ORDERS, SET_OFFERINGS, SET_POLLS, UPDATE_ORDER } from '../actions/businessActions';

const initialState = {
    offerings: [],
    polls: [],
    orders: []
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case ADD_OFFERING:
      return { ...state, offerings: [...state.offerings, action.payload] }
    case ADD_POLL:
      return { ...state, polls: [...state.polls, action.payload] };
    case SET_ORDERS:
      return { ...state, orders: action.payload };
    case SET_OFFERINGS:
      return { ...state, offerings: action.payload };
    case SET_POLLS:
      return { ...state, polls: action.payload };
    case UPDATE_ORDER:
      return { ...state, orders: state.orders.map((order, i) => {
        if(i === action.payload.index) return action.payload.order;
        return order;
      })};
    default:
      return state;
  }
}
