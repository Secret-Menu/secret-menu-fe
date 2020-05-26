import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectOrders } from '../../../../selectors/businessSelectors/';

const OrderDetail = (order) => {
  
  // get orders offerings from state as prop
  

  // const orders = useSelector(selectOrders);

  return (
    <>
      <Link key={order_id} to={`orders/${order._id}`}>
        <div>
          <h4>{orderNumber}</h4>
          <p>Placed On: {placedOn}</p>
          <p>Order Total: {orderTotal}</p>
      
        </div>
      </Link>
    </>
  );
};

OrderDetail.propTypes = {
  orderNumber: PropTypes.number,
  placedOn: PropTypes.string,
  orderTotal: PropTypes.number
};

export default OrderDetail;
