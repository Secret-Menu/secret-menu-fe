import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from './authHooks';
import { getUserOrders, getUpcomingUserOrders, getPreviousUserOrders, getUserFavorites, getUpcomingUserPolls, getPreviousUserPolls } from '../selectors/userProfileSelectors';
import { setUserOrders, setUserFavorites, setUserPolls } from '../actions/userProfileActions';
import { useEffect } from 'react';

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const allOrders = useSelector(getUserOrders);
  const upcomingOrders = useSelector(getUpcomingUserOrders);
  const previousOrders = useSelector(getPreviousUserOrders);
  const favorites = useSelector(getUserFavorites);
  const upcomingPolls = useSelector(getUpcomingUserPolls);
  const previousPolls = useSelector(getPreviousUserPolls);

  useEffect(() => {
    if(user) dispatch(setUserOrders(user._id));
    if(user) dispatch(setUserFavorites());
    if(user) dispatch(setUserPolls(user._id));
  }, [user]);

  return {
    user,
    allOrders,
    upcomingOrders,
    previousOrders,
    favorites,
    upcomingPolls,
    previousPolls
  };
};
