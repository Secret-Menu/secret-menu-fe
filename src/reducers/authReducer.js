import { SET_USER, SET_USER_ERROR, SET_USER_LOADING } from '../actions/authActions';

const initialState = {
  loading: true,
  user: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case SET_USER:
      return { ...state, user: action.payload, error: null, loading: false };
    case SET_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}