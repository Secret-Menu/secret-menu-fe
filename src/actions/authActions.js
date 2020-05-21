import { postSignUp, postLogIn } from "../services/auth-api";

export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';

export const signup = (firstName, lastName, email, password, role) => dispatch => {
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