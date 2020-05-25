import { fetchBusinessPolls, fetchBusinessOfferings, addOffering } from '../services/business-api';

export const GET_POLLS = 'GET_POLLS';
export const getBusinessPolls = (restaurantId) => dispatch => {
  return fetchBusinessPolls(restaurantId)
    .then(res => {
      dispatch({
        type: GET_POLLS,
        payload: res
      });
    });
};

export const GET_OFFERINGS = 'GET_OFFERINGS';
export const getBusinessOfferings = (id) => dispatch => {
  return fetchBusinessOfferings(id)
    .then(res => {
      dispatch({
        type: GET_OFFERINGS,
        payload: res
      });
    });
};

export const ADD_OFFERING = 'ADD_OFFERING';
export const addBusinessOffering = (id) => dispatch => {
  return addOffering(restaurantId)
    .then(res => {
      dispatch({
        type: ADD_OFFERING,
        payload: res
      });
    });
};

// export const ADD_POLL = 'ADD_POLL';
// export const addBusinessPoll = (id) => dispatch => {
//   return addPoll(restaurantId)
//     .then(res => {
//       dispatch({
//         type: ADD_POLL,
//         payload: res
//       });
//     });
// };
