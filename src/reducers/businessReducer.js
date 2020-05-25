import { GET_POLLS, GET_OFFERINGS } from '../actions/businessActions';

export default function reducer(state,action) {
  switch(action.type){
    case GET_POLLS:
      return [action.payload]
    case GET_OFFERINGS: 
      return [action.payload]
    default:
      return state;
  }
}