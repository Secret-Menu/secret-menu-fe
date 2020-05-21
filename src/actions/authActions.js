import { postSignUp, postLogIn, getLogOut, getVerify } from '../services/auth-api';

export const SET_USER_LOADING = 'SET_USER_LOADING';
export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const authActionCreatorCreator = authFn => (email, password) => dispatch => {
  dispatch({
    type: SET_USER_LOADING
  });
  
  authFn(email, password)
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

export const logout = () => dispatch => {
  getLogOut()
    .then(() => {
      dispatch({
        type: SET_USER,
        payload: null
      });
    });
};

export const signup = authActionCreatorCreator(postSignUp);
export const login = authActionCreatorCreator(postLogIn);
export const verify = authActionCreatorCreator(getVerify);