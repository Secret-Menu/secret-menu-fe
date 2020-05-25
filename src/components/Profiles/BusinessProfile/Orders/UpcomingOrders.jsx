//upcoming orders table

import React from 'react';
import OrderDetail from './OrderDetail';

const UpcomingOrders = () => {
  //get polls per restaurant --hook? selector??

  const ordersToList = orders.map(order => (
    <tr key={border.orderNumber}>
      <OrderDetail {...order} />
    </tr>
  ));

  return (
    <>
      <tr>
        {pollList}
      </tr>
    </>
  );
};



export default UpcomingOrders;
