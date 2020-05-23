import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../actions/restaurantActions';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../selectors/restaurantSelectors';

export const useRestaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(getRestaurant);
  const [offerings, setOfferings] = useState([]);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    dispatch(setRestaurant(id));
  }, []);

  useEffect(() => {
    if(restaurant.offerings) setOfferings(restaurant.offerings);
    if(restaurant.polls) {   
      const pollFilter = restaurant.polls.filter(poll => { 
        const endDate = new Date(poll.end);
        const today = new Date();
        if(endDate > today) return poll;
        else return null;
      });
      setPolls(pollFilter);
    }
  }, [restaurant]);

  return {
    id,
    restaurant,
    offerings,
    polls
  };
};
