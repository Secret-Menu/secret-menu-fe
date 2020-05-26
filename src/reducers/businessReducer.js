import { GET_BUSINESS, GET_POLLS, GET_OFFERINGS, ADD_OFFERING, ADD_POLL } from '../actions/businessActions';

const initialState = {
    offerings: [],
    polls: [],
    orders: []
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case GET_BUSINESS:
      return {restaurant: action.payload};
    case ADD_OFFERING:
      return { ...state, offerings: [...state.offerings, action.payload] }
    case ADD_POLL:
      return { ...state, polls: [...state.polls, action.payload] };
    default:
      return state;
  }
}
