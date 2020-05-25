import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';
import business from './businessReducer';

export default combineReducers({
  auth,
  restaurants,
  cart,
  business
});
