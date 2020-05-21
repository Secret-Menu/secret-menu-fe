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
      // then dispatch another action to our reducer
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
  getLogout()
    .then(() => {
      dispatch({
        type: SET_USER,
        payload: null
      });
    });
};

export const signup = authActionCreatorCreator(postSignup);
export const login = authActionCreatorCreator(postLogin);
export const verify = authActionCreatorCreator(getVerify);