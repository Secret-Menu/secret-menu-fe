import { fetchBusinessPolls, fetchBusinessOfferings, addOffering, fetchBusiness, fetchBusinessOrders } from '../services/business-api';

export const GET_ORDERS = 'GET_ORDERS';
export const getBusinessOrders = (id) => dispatch => {
  return fetchBusinessOrders(id)
    .then(res => {
      dispatch({
        type: GET_ORDERS,
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
