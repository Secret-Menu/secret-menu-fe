import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { markOrderClosed } from '../../../../actions/businessActions';

const OrderDetail = ({ orderNumber, created_at, orderTotal, user, offering, _id, offeringId }) => {
  const dispatch = useDispatch();

  const dollars = orderTotal / 100;
  const formattedTotal = dollars.toFixed(2);

  const handleOrderClose = (_id, offeringId) => {
    dispatch(markOrderClosed(_id, offeringId));
  };

  return (
    <>
      <td>{created_at}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{orderNumber}</td>
      <td>{offering.pickUpDate}</td>
      <td>{`$${formattedTotal}`}</td>
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
