import { SET_RESTAURANT, GET_AREA } from '../actions/restaurantActions';

const initialState = {
  areaRestaurants: [],
  restaurant: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_AREA:
      return { ...state, areaRestaurants: action.payload };
    case SET_RESTAURANT:
      return { ...state, restaurant: action.payload };
    default:
      return state;
  }
}
