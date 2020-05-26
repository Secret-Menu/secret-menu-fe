import { SET_USER_ORDERS, ADD_USER_FAVORITE, SET_USER_FAVORITES, DELETE_USER_FAVORITE } from '../actions/userProfileActions';

const initialState = {
  userOrders: [
    { 
      restaurant: 
      {
        restaurantName: ''
      } 
    }
  ],
  userFavorites: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ORDERS:
      return { ...state, userOrders: action.payload };
    case SET_USER_FAVORITES:
      return { ...state, userFavorites: action.payload };
    case ADD_USER_FAVORITE:
      return { ...state, userFavorites: [...state.userFavorites, action.payload] };
    case DELETE_USER_FAVORITE:
      return { ...state, userFavorites: state.userFavorites.filter(favorite => favorite._id !== action.payload._id) };
      // return state;
    default:
      return state;
  }
}
