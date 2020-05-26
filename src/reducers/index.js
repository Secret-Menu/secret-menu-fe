import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';
import userProfile from './userProfileReducer';

export default combineReducers({
  auth,
  restaurants,
  cart,
  userProfile
});
