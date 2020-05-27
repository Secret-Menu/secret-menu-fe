import React from 'react';
import PropTypes from 'prop-types';

//TABLE ORDER DETAIL

const OrderDetail = ({ created_at, orderStatus, orderNumber, orderTotal, user, offering }) => {

  return (
    <>
      <td>{created_at}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{orderNumber}</td>
      <td>{orderStatus}</td>
      <td>{offering.pickUpDate}</td>
      <td>{orderTotal}</td>
      <td><button>Picked Up!</button></td>
    </>
  );
};

OrderDetail.propTypes = {
  created_at: PropTypes.string,
  orderStatus: PropTypes.string,
  orderNumber: PropTypes.number,
  orderTotal: PropTypes.number,
  user: PropTypes.object,
  offering: PropTypes.object
};

export default OrderDetail;
