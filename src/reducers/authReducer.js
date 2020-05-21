import { SET_USER, SET_USER_ERROR } from '../actions/authActions';

const initialState = {
  user: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}