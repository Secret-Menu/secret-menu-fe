import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrders, selectOrderOfferings } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { useParams } from 'react-router-dom';
import { setBusinessOrders } from '../../../../actions/businessActions';


const OrderOfferings = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const {orderId} = useParams();
  const offerings = useSelector(state => selectOrderOfferings(state, orderId));

  useEffect(() => {
    if(user) dispatch(setBusinessOrders(user.restaurant[0]._id))
  }, [user])

  const offeringNodesToList = offerings.map((offering, i) => (
    <li key={i}>
      <p>price- {offering.offering.price}</p>
      <p>quantity- {offering.quantity}</p>
    </li>
  )) 
  console.log(offeringNodesToList)

  return (
  <>
    <ul>
      {offeringNodesToList}
    </ul>
  </>
  )
};
OrderOfferings.propTypes = {
  created_at: PropTypes.string,
  user: PropTypes.object,
  orderNumber: PropTypes.string,
  pickUpDate: PropTypes.string,
  orderTotal: PropTypes.number
};
export default OrderOfferings;
