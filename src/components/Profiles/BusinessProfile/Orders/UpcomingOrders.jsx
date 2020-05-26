import React, { useEffect } from 'react';
import OrderDetail from './OrderDetail';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import {  useDispatch } from 'react-redux';
import { getBusinessOrders } from '../../../../actions/businessActions';



const UpcomingOrders = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  // const orders = useSelector(selectOrders);
  useEffect(() => {if(user) dispatch(getBusinessOrders(user.restaurant[0]._id));}, [user]);

  // const ordersToList = orders.map(order => (
  //   <tr key={border.orderNumber}>
  //     <OrderDetail {...order} />
  //   </tr>
  // ));

  return (
    <>
      <td>
        {/* {ordersToList}   */}
      </td>
    </>
  );
};

export default UpcomingOrders;
