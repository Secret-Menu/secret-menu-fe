import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';

//TABLE ORDER DETAIL

const OrderDetail = ({ createdAt, customerName, orderStatus, orderNumber, pickUpDate }) => {
  const user = useCurrentUser();
  const orders = useSelector(selectOrders);

  console.log(orders);
  return (
    <>
        <tr>
          <td>{ordorderNumber}</td>
          <td>Placed On: {orders.createdAt}</td>
          <td>Order Total: {orderTotal}</td>
        </tr>
    </>
  );
};

export default OrderDetail;
