import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from './authHooks';
import { getUserOrders, getUpcomingUserOrders, getPreviousUserOrders } from '../selectors/orderSelectors';
import { setUserOrders } from '../actions/orderActions';
import { useEffect } from 'react';

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const allOrders = useSelector(getUserOrders);
  const upcomingOrders = useSelector(getUpcomingUserOrders);
  const previousOrders = useSelector(getPreviousUserOrders);

  useEffect(() => {
    if(user) dispatch(setUserOrders(user._id));
  }, [user]);

  return {
    user,
    allOrders,
    upcomingOrders,
    previousOrders
  };
};
