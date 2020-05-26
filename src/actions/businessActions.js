import { fetchBusinessPolls, fetchBusinessOfferings, postOffering, fetchBusiness } from '../services/business-api';

// export const GET_POLLS = 'GET_POLLS';
// export const getBusinessPolls = (restaurantId) => dispatch => {
//   return fetchBusinessPolls(restaurantId)
//     .then(res => {
//       dispatch({
//         type: GET_POLLS,
//         payload: res
//       });
//     });
// };

// export const GET_OFFERINGS = 'GET_OFFERINGS';
// export const getBusinessOfferings = (id) => dispatch => {
//   return fetchBusinessOfferings(id)
//     .then(res => {
//       dispatch({
//         type: GET_OFFERINGS,
//         payload: res
//       });
//     });
// };

export const GET_BUSINESS = 'GET_BUSINESS';
export const getBusiness = (id) => dispatch => {
  return fetchBusiness(id)
    .then(res => {
      dispatch({
        type: GET_BUSINESS,
        payload: res
      });
    });
};


export const ADD_OFFERING = 'ADD_OFFERING';
export const addBusinessOffering = offering => dispatch => {
  return postOffering(offering)
    .then(res => {
      dispatch({
        type: ADD_OFFERING,
        payload: offering
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
