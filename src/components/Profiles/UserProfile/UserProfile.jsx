import React from 'react';
import OrderCalendar from '../../OrderCalendar/OrderCalendar';
import styles from './UserProfile.css';
import UserProfileDetail from './UserProfileDetail';
import { useUserProfile } from '../../../hooks/userProfileHooks';

export default function UserProfile() {
  const { user, allOrders, upcomingOrders, previousOrders } = useUserProfile();

  const upcomingOrderNodes = upcomingOrders.map(order => <UserProfileDetail key={Math.random()} order={order}/>);
  const previousOrderNodes = previousOrders.map(order => { 
    console.log(order);
    return <UserProfileDetail key={order._id} order={order}/>; });

  return (
    <div className={styles.UserProfile}>
      <h1>{user ? `${user.firstName} ${user.lastName}` : 'Loading'}</h1>
      <div className={styles.Orders}>
        <div>
          <h2>Upcoming Orders</h2>
          <ul>
            {upcomingOrderNodes.length > 0 ? upcomingOrderNodes : 'No upcoming orders'}
          </ul>          
          <h2>Previous Orders</h2>
          <ul>
            {previousOrderNodes.length > 0 ? previousOrderNodes : 'No previous orders'}
          </ul>
        </div>
        <div>
          <OrderCalendar orders={allOrders}/>
        </div>
      </div>
      <div className={styles.Favorites}>
        <h2>Favorite Restaurants</h2>
      </div>
    </div>
  );
}
