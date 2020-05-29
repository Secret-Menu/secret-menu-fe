import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { markOrderClosed } from '../../../../actions/businessActions';
import { convertToDollars } from '../../../../services/money';
import { getFormattedDate } from '../../../../services/date';

const OrderDetail = ({ orderNumber, created_at, orderTotal, user, offering, _id, offeringId }) => {
  const dispatch = useDispatch();

  const handleOrderClose = (_id, offeringId) => {
    dispatch(markOrderClosed(_id, offeringId));
  };




  return (
    <>
      <td>{getFormattedDate(created_at)}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{orderNumber}</td>
      <td>{getFormattedDate(offering.pickUpDate)}</td>
      <td>{convertToDollars(orderTotal)}</td>
      <td><button onClick={() => handleOrderClose(_id, offeringId)}>Mark Complete</button></td>
    </>
  );
};

OrderDetail.propTypes = {
  created_at: PropTypes.string,
  orderNumber: PropTypes.number,
  orderTotal: PropTypes.number,
  user: PropTypes.object,
  offering: PropTypes.object,
  _id: PropTypes.string,
  offeringId: PropTypes.string,
  restaurant: PropTypes.object
};

export default OrderDetail;
