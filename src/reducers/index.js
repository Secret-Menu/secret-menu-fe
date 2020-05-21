import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';

export default combineReducers({
  auth,
  restaurants
});
