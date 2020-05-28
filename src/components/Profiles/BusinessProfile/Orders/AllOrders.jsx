import React, { useEffect } from 'react';
import OrderRow from './OrderRow';
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessOrders } from '../../../../actions/businessActions';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { selectOrders } from '../../../../selectors/businessSelectors';

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
    <table>
      <thead>
        <tr>   
          <th>Order #</th>
          <th>Order Total</th>
          <th>Status</th>
          <th>Customer Name</th>
        </tr>
      </thead>
      <tbody>
        {orderRows}
      </tbody>
    </table>
  );
};

export default AllOrders;
