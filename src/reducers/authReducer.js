import { SIGNUP } from '../actions/authActions';

const initialState = {
  user: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SIGNUP:
      return {...state, user: action.payload };

    default:
      return state;
  }
}