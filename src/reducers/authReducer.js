import { SET_USER } from '../actions/authActions';

const initialState = {
  user: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {...state, user: action.payload };
    default:
      return state;
  }
}