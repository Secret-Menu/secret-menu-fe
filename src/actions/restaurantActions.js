import { getAreaRestaurants } from '../services/restaurantFetch';

export const getAreaAction = (area) => dispatch => {
  return getAreaRestaurants(area)
    .then(res => {
      dispatch({
        type: 'GET_AREA',
        payload: res
      });
    });
};
