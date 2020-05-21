import { postSignUp } from "../services/auth-api";

export const SIGNUP = 'SIGNUP';
export const signup = (firstName, lastName, email, password, role) => dispatch => {
  postSignUp(firstName, lastName, email, password, role)
    .then(user => {
      dispatch({
        type: SIGNUP,
        payload: user
      })
    })
};