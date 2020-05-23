import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';

export default combineReducers({
  auth,
  restaurants,
  cart
});
