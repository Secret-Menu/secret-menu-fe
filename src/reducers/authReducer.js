import { SET_USER, SET_USER_ERROR, SET_USER_LOADING, SET_BUSINESS } from '../actions/authActions';

const initialState = {
  user: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case SET_BUSINESS:
      return { ...state, user: { ...state.user, restaurant: [action.payload] } };
    default:
      return state;
  }
}
