import { GET_ALL, GET_AREA, SET_RESTAURANT, RESET_RESTAURANT, SEARCH_ALL_RESTAURANT, SEARCH_AREA_RESTAURANT  } from '../actions/restaurantActions';

const initialState = {
  allRestaurants: {
    restaurants: [],
    anchorPoint: {}
  },
  areaRestaurants: {
    restaurants: [],
    anchorPoint: {
      center: {},
      zoom: null
    }
  },
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
    case SEARCH_ALL_RESTAURANT:
      return { ...state, allRestaurants: action.payload };
    case SEARCH_AREA_RESTAURANT:
      return { ...state, areaRestaurants: action.payload };
    default:
      return state;
  }
}
