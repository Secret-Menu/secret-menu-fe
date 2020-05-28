import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { markOrderClosed, setBusinessOrders } from '../../../../actions/businessActions';

const OrderDetail = ({ orderNumber, created_at, orderStatus, orderTotal, user, offering, _id, offeringId, restaurant }) => {
  const dispatch = useDispatch();
  const history = useHistory();




  const handleOrderClose = (_id, offeringId, restaurant) => {
    dispatch(markOrderClosed(_id, offeringId));
    dispatch(setBusinessOrders(restaurant));
    history.push('/business/all-orders');
  };

  return (
    <>
      <td>{created_at}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{orderNumber}</td>
      <td>{orderStatus}</td>
      <td>{offering.pickUpDate}</td>
      <td>{orderTotal}</td>
      <td><button onClick={() => handleOrderClose(_id, offeringId, restaurant)}>Picked Up!</button></td>
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
