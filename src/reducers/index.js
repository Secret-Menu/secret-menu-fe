import { combineReducers } from 'redux';
import auth from './authReducer';
import restaurants from './restaurantReducer';
import cart from './cartReducer';
import userProfile from './userProfileReducer';
import business from './businessReducer';

const appReducer = combineReducers({
  auth,
  restaurants,
  cart,
  userProfile,
  business
});

export default (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};
