import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrders, selectOrderOfferings, selectOrderFromOffering } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { useParams } from 'react-router-dom';
import { setBusinessOrders } from '../../../../actions/businessActions';


const OrderOfferings = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const { orderId } = useParams();
  const offerings = useSelector(state => selectOrderOfferings(state, orderId));
  const order = useSelector(state => selectOrderFromOffering(state, orderId));
  
  console.log(order);

  useEffect(() => {
    if(user) dispatch(setBusinessOrders(user.restaurant[0]._id));
  }, [user]);

  const offeringNodesToList = offerings.map((offering, i) => (
    <li key={i}>
      <p>Offering: {offering.offering.dishName}</p>
      <p>Price: {offering.offering.price}</p>
      <p>Quantity: {offering.quantity}</p>
    </li>
  )); 
  console.log(offeringNodesToList);

  return (
    <>
      <p>Order Number: {order.orderNumber}</p>
      <p>Offerings: {offeringNodesToList}</p>
      <p>Customer Name: {`${order.user.firstName} ${order.user.lastName}`}</p>
      <p>Placed On: {}</p>
      <p>Order Total: </p>
    </>
  );
};
OrderOfferings.propTypes = {
  created_at: PropTypes.string,
  user: PropTypes.object,
  orderNumber: PropTypes.string,
  pickUpDate: PropTypes.string,
  orderTotal: PropTypes.number
};
export default OrderOfferings;
