import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors/';

const OrderDetail = (order) => {
  const user = useCurrentUser();
  const orders = useSelector(selectOrders);

  return (
    <>
        <div>
          <h4>{orderNumber}</h4>
          <p>Placed On: {placedOn}</p>
          <p>Order Total: {orderTotal}</p>
        </div>
    </>
  );
};

OrderDetail.propTypes = {
  orderNumber: PropTypes.number,
  placedOn: PropTypes.string,
  orderTotal: PropTypes.number
};

export default OrderDetail;
