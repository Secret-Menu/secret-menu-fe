import { fetchBusinessPolls, fetchBusinessOfferings, postOffering, fetchBusiness, postPoll } from '../services/business-api';

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
export const addBusinessOffering = offering => dispatch => {
  return postOffering(offering)
    .then(res => {
      dispatch({
        type: ADD_OFFERING,
        payload: offering
      });
    });
};

export const ADD_POLL = 'ADD_POLL';
export const addBusinessPoll = poll => dispatch => {
  return postPoll(poll)
    .then(res => {
      dispatch({
        type: ADD_POLL,
        payload: poll
      });
    });
};
