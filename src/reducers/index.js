import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';

export default combineReducers({
  restaurants: restaurants
});
