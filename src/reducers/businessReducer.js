import { GET_BUSINESS, GET_POLLS, GET_OFFERINGS } from '../actions/businessActions';

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
      return { ...state, offerings: [...offerings, action.payload] }
    default:
      return state;
  }
}
