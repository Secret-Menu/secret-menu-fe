import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OfferingDetail from '../../6_OfferingDetail/OfferingDetail';

const OrderDetail = (order) => {
  
  // get orders offerings from state
  //map over each orders offering

  // const offerings = 

  return (
    <>
      <Link key={order_id} to={`orders/${order._id}`}>
        <div>
          <h4>{order.orderNumber}</h4>
          <p>Placed On: {order.placedOn}</p>
          <p>Order Total: {order.orderTotal}</p>
      
        </div>
      </Link>
    </>
  );
};

OrderDetail.propTypes = {
  order: PropTypes.object
};

export default OfferingDetail;
