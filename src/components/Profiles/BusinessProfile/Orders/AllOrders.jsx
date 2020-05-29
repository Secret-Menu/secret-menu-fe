import React, { useEffect } from 'react';
import OrderRow from './OrderRow';
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessOrders } from '../../../../actions/businessActions';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { selectOrders } from '../../../../selectors/businessSelectors';
import styles from './AllOrders.css';

const AllOrders = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    if(user) dispatch(setBusinessOrders(user.restaurant[0]._id));
  }, [user]);

  const orderRows = orders?.map(order => (
    <OrderRow {...order} key={order._id}/>
  ));
  return (
    <>
      <h2 className={styles.OrdersHeading}>Order History</h2>
      <table className={styles.OrdersTable}>
        <thead>
          <tr>   
            <th>Order #</th>
            <th>Order Total</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {orderRows}
        </tbody>
      </table>
    </>
  );
};

export default AllOrders;
