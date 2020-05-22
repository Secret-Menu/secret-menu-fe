const initialState = {
  areaRestaurants: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_AREA':
      return { ...state, areaRestaurants: action.payload };
    default:
      return state;
  }
}
