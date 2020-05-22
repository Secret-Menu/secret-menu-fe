import { SET_RESTAURANT } from '../actions/restaurantActions';

const initialState = {
  restaurants: [],
  restaurant: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_RESTAURANT:
      return { ...state, restaurant: action.payload };
    default:
      return state;
  }
}
