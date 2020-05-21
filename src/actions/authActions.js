import { postSignUp, postLogIn } from "../services/auth-api";

export const SET_USER = 'SET_USER';

export const signup = (firstName, lastName, email, password, role) => dispatch => {
  postSignUp(firstName, lastName, email, password, role)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      })
    })
};

export const login = (email, password) => dispatch => {
  postLogIn(email, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      })
    })
};