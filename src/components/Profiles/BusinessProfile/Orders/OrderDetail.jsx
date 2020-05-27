import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';


//TABLE ORDER DETAIL

const OrderDetail = ({ created_at, customerName, orderStatus, orderNumber, pickUpDate, orderTotal, user }) => {

  return (
    <>
          <td>{created_at}</td>
          <td>{`${user.firstName} ${user.lastName}`}</td>
          <td>{orderNumber}</td>
          <td>{orderStatus}</td>
          <td>{pickUpDate}</td>
          <td>{orderTotal}</td>
    </>
  );
};
export default OrderDetail;
