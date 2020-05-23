import { postSignUp, postLogIn, getVerify } from "../services/auth-api";
import { createRef } from "react";
import { createRestaurant } from "../services/restaurants-api";

export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_USER_LOADING = 'SET_USER_LOADING';
export const SET_BUSINESS = 'SET_BUSINESS';

export const signup = (newUser) => dispatch => {
  dispatch({type: SET_USER_LOADING});
  postSignUp(newUser)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      })
    })
    .catch(err => {
      dispatch({
        type: SET_USER_ERROR,
        payload: err.message
      })
    })
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
    });
}

export const login = (email, password) => dispatch => {
  dispatch({type: SET_USER_LOADING});
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
    });
};

export const verify = (email, password) => dispatch => {
  // dispatch({type: SET_USER_LOADING});
  getVerify(email, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
    })
    .catch(err => console.log(err));
};

export const logout = () => dispatch => {
  getLogout()
    .then(() => {
      dispatch({
        type: SET_USER,
        payload: null
      });
    });
    
};
//

