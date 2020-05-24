import React, { useEffect } from 'react';
import OrderCalendar from '../../OrderCalendar/OrderCalendar';
import styles from './UserProfile.css';
import { useCurrentUser } from '../../../hooks/authHooks';
import { useDispatch, useSelector } from 'react-redux';
import { setUserOrders } from '../../../actions/orderActions';
import { getUserOrders } from '../../../selectors/orderSelectors';

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const userOrders = useSelector(getUserOrders);

  useEffect(() => {
    if(user) dispatch(setUserOrders(user._id));
  }, [user]);

  const orderMunge = userOrders.map(order => ({
    info: order.restaurant,
    date: new Date(order.pickUpDate)
  }))
    .sort(function(a, b) {
      return a.date - b.date;
    });

  const previousOrders = orderMunge.filter(order => {
    const today = new Date();
    return order.date < today;
  })
    .map(order => <li key={order._id}>{order.date.toString()}</li>);

  const upcomingOrders = orderMunge.filter(order => {
    const today = new Date();
    return order.date > today;
  })
    .map(order => {
      const plainDate = `${order.date.getMonth() + 1}/${order.date.getDate()}/${order.date.getFullYear()}`;
      
      return (<li key={order._id}>{`${plainDate} - ${order.info}`}</li>);});

  console.log(user);
  return (
    <div className={styles.UserProfile}>
      <h1>{user ? `${user.firstName} ${user.lastName}` : 'Loading'}</h1>
      <div className={styles.Orders}>
        <div>
          <h2>Upcoming Orders</h2>
          <ul>
            {upcomingOrders.length > 0 ? upcomingOrders : 'No upcoming orders'}
          </ul>          
          <h2>Previous Orders</h2>
          <ul>
            {previousOrders.length > 0 ? previousOrders : 'No previous orders'}
          </ul>
        </div>
        <div>
          <OrderCalendar orders={orderMunge}/>
        </div>
      </div>
      FAVORITE RESTAURANTS
    </div>
  );
}
