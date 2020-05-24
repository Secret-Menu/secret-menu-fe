import React, { useEffect } from 'react';
import OrderCalendar from '../../OrderCalendar/OrderCalendar';
import styles from './UserProfile.css';
import { useCurrentUser } from '../../../hooks/authHooks';
import { useDispatch } from 'react-redux';
import { setUserOrders } from '../../../actions/orderActions';

export default function UserProfile() {
  const user = useCurrentUser();
  const dispatch = useDispatch();

  const orders = [
    {
      info: 'Chris\' Bamboo Grove',
      date: new Date(2020, 4, 19)
    },
    {
      info: 'Hannah\'s Hummus',
      date: new Date(2020, 4, 22)
    },
    {
      info: 'Josh\'s Vegan Palace',
      date: new Date(2020, 4, 26)
    },
    {
      info: 'Ciao Bella',
      date: new Date(2020, 4, 26)
    },
    {
      info: '7-11',
      date: new Date(2020, 4, 27)
    }
  ];

  useEffect(() => {
    dispatch(setUserOrders(user._id));
  }, []);

  return (
    <div className={styles.UserProfile}>
      <div className={styles.Orders}>
        <div>
          UPCOMING ORDERS
          ORDER HISTORY
        </div>
        <div>
          <OrderCalendar orders={orders}/>
        </div>
      </div>
      FAVORITE RESTAURANTS
    </div>
  );
}
