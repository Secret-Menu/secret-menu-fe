import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';
import orders from './ordersReducer';

export default combineReducers({
  auth,
  restaurants,
  cart,
  orders
});
