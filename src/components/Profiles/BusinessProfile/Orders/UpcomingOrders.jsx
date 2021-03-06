import React, { useEffect } from 'react';
import OrderDetail from './OrderDetail';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import {  useDispatch } from 'react-redux';
import { setBusinessOrders } from '../../../../actions/businessActions';
import styles from './UpcomingOrders.css';

const UpcomingOrders = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {if(user) dispatch(setBusinessOrders(user.restaurant[0]._id));}, [user]);

  const orderOfferings = orders.map(order => {
    return order.offering.map((offering) => ({
      ...offering,
      orderNumber: order.orderNumber,
      orderTotal: order.orderTotal,
      user: order.user,
      created_at: order.created_at,
      _id: order._id,
      offeringId: offering._id
    }));
  }).flat()
    .filter(offering => offering.orderStatus !== 'Closed');

  const ordersToList = orderOfferings.map(order => (
    <tr key={`${order.orderNumber}${order.offering._id}`}>
      <OrderDetail {...order} />
    </tr>
  ));

  return (
    <>
      <table className={styles.OrdersTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Order #</th>
            <th>Pick Up Date</th>
            <th>Order Total</th>
          </tr>
        </thead>
        <tbody>
          {ordersToList}
        </tbody>
      </table>
    </>
  );
};

export default UpcomingOrders;
