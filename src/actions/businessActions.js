import { fetchBusinessPolls, fetchBusinessOfferings, postOffering, fetchBusiness, postPoll, fetchBusinessOrders } from '../services/business-api';
import { toast } from 'react-toastify';

export const SET_ORDERS = 'SET_ORDERS';
export const setBusinessOrders = (id) => dispatch => {
  return fetchBusinessOrders(id)
    .then(res => {
      dispatch({
        type: SET_ORDERS,
        payload: res
      });
    });
};

export const SET_OFFERINGS = 'SET_OFFERINGS';
export const setBusinessOfferings = (id) => dispatch => {
  return fetchBusinessOfferings(id)
    .then(res => {
      dispatch({
        type: SET_OFFERINGS,
        payload: res
      });
    });
};

export const SET_POLLS = 'SET_POLLS';
export const setBusinessPolls = (id) => dispatch => {
  return fetchBusinessPolls(id)
    .then(res => {
      dispatch({
        type: SET_POLLS,
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
      toast.success('Offering Added!');
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
      toast.success('Poll Added!');
    });
};
