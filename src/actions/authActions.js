import { postSignUp, postLogIn } from "../services/auth-api";

export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_USER_LOADING = 'SET_USER_LOADING';

export const signup = (firstName, lastName, email, password, role) => dispatch => {
  dispatch({type: SET_USER_LOADING});
  postSignUp(firstName, lastName, email, password, role)
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