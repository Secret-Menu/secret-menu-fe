import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';
import userProfile from './userProfileReducer';
import business from './businessReducer';

export default combineReducers({
  auth,
  restaurants,
  cart,
  userProfile,
  business
});
