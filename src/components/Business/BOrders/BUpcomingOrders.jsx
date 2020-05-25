//upcoming orders table

import React from 'react';
import BOrderDetail from './BOrderDetail';

const BUpcomingOrdersList = () => {
  //get polls per restaurant --hook? selector??

  const ordersToList = orders.map(order => (
    <tr key={border.orderNumber}>
      <BOrderDetail {...order} />
    </tr>
  ));

  return (
    <>
      <tr>
        {pollsToList}
      </tr>
    </>
  );
};



export default BUpcomingOrdersList;
