import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';


const AllOrdersOfferings = () => {
  const user = useCurrentUser();
  const orders = useSelector(selectOrders);

  const offeringNodesToList = orders.map(order => {
    <li key={i}>
      {order.offering.dishName}
      {order.offering.price}
      {order.offering.quantity}
    </li>
  }) 
  console.log(offeringNodesToList)

  return (
  <>
    <ul>
      {offeringNodesToList}
    </ul>
  </>
  )
};
AllOrdersOfferings.propTypes = {
  created_at: PropTypes.string,
  user: PropTypes.object,
  orderNumber: PropTypes.string,
  pickUpDate: PropTypes.string,
  orderTotal: PropTypes.number
};
export default AllOrdersOfferings;
