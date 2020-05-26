//upcoming orders table

import React from 'react';
import OrderDetail from './OrderDetail';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';

const UpcomingOrders = () => {
  const orders = useSelector(selectOrders);

  const ordersToList = orders.map(order => (
    <tr key={border.orderNumber}>
      <OrderDetail {...order} />
    </tr>
  ));

  return (
    <>
      <td>
        {ordersToList}
      </td>
    </>
  );
};

export default UpcomingOrders;