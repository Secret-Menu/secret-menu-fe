import { postSignUp, postLogIn, getVerify, getLogOut } from '../services/auth-api';
import { createRestaurant } from '../services/restaurants-api';
import { toast } from 'react-toastify';

export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_USER_LOADING = 'SET_USER_LOADING';
export const SET_BUSINESS = 'SET_BUSINESS';

export const signup = (newUser) => dispatch => {
  dispatch({ type: SET_USER_LOADING });
  postSignUp(newUser)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
      toast.success(`Account Created! Welcome ${user.firstName}!`);
    })
    .catch(err => {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.message
      });
      toast.error(err.message);
    });
};

export const signUpRestaurant = restaurant => dispatch => {
  createRestaurant(restaurant)
    .then(restaurant => {
      dispatch({
        type: SET_BUSINESS,
        payload: restaurant
      });
    })
    .catch(err => {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.message
      });
      toast.error(err.message);
    });
};

export const login = (email, password) => dispatch => {
  dispatch({ type: SET_USER_LOADING });
  postLogIn(email, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.message
      });
      if(err.message === 'Cannot read property \'role\' of null') 
        toast.error('Invalid Email');
      if(err.message === 'Failed to fetch') 
        toast.error('Invalid Email');
      else return toast.error(err.message);
    });
};

export const verify = (email, password) => dispatch => {
  // this is where the JWT errors appear all over
  getVerify(email, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
    });
  // .catch(err =>  toast.error(err.message));
};

export const logout = () => dispatch => {
  getLogOut()
    .then(() => {
      dispatch({
        type: SET_USER,
        payload: null
      });
    })
    .then(() => {
      dispatch({ type: 'LOGOUT' });
    });
// .catch(err =>  toast.error(err.message));
};
