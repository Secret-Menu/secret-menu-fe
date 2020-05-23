import { fetchBusinessPolls, fetchBusinessOfferings } from '../services/business-api';

export const GET_POLLS = 'GET_POLLS';
export const getBusinessPolls = (id) => dispatch => {
  return fetchBusinessPolls(id)
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