import { GET_ALL, GET_AREA, SET_RESTAURANT, RESET_RESTAURANT  } from '../actions/restaurantActions';

const initialState = {
  allRestaurants: [],
  areaRestaurants: [],
  restaurant: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL:
      return { ...state, allRestaurants: action.payload };
    case GET_AREA:
      return { ...state, areaRestaurants: action.payload };
    case SET_RESTAURANT:
      return { ...state, restaurant: action.payload };
    case RESET_RESTAURANT:
      return { ...state, restaurant: action.payload };
    default:
      return state;
  }
}
