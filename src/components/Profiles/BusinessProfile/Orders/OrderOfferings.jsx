import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderOfferings, selectOrderFromOffering } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { useParams } from 'react-router-dom';
import { setBusinessOrders } from '../../../../actions/businessActions';
import styles from './OrderOfferings.css';


const OrderOfferings = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const { orderId } = useParams();
  const offerings = useSelector(state => selectOrderOfferings(state, orderId));
  const order = useSelector(state => selectOrderFromOffering(state, orderId));
  console.log(order);

  useEffect(() => {
    if(user) dispatch(setBusinessOrders(user?.restaurant[0]._id));
  }, [user]);

  const offeringNodesToList = offerings?.map((offering, i) => (
    <li key={i}>
      <p>Offering: {offering.offering.dishName}</p>
      <p>Price: {offering.offering.price}</p>
      <p>Quantity: {offering.quantity}</p>
    </li>
  )); 

  const dateConversion = (oldDate) => {
    const dateToConvert = new Date(oldDate);
    return dateToConvert.toLocaleDateString(undefined);
  };

  return (
    <div className={styles.Order}>
      <p><span className={styles.bold}>Order Number: </span> {order?.orderNumber}</p>
      <p><span className={styles.bold}>Offerings: </span></p>
      <ul>{offeringNodesToList}</ul>
      <p><span className={styles.bold}>Customer Name: </span>{`${order?.user.firstName} ${order?.user.lastName}`}</p>
      <p><span className={styles.bold}>Placed On: </span>{dateConversion(order?.created_at)}</p>
      <p><span className={styles.bold}>Order Total: </span>{`$${order?.orderTotal / 100}`}</p>
    </div>
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
