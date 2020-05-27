import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant, resetRestaurant } from '../actions/restaurantActions';
import { useParams } from 'react-router-dom';
import { getRestaurant, getRestaurantLat, getRestaurantLng } from '../selectors/restaurantSelectors';

export const useRestaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(getRestaurant);
  const [offerings, setOfferings] = useState([]);
  const [polls, setPolls] = useState([]);
  const lat = useSelector(getRestaurantLat);
  const lng = useSelector(getRestaurantLng);
  const [pageLat, setPageLat] = useState(0);
  const [pageLng, setPageLng] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setRestaurant(id));
    return () => dispatch(resetRestaurant());
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
    if(restaurant.offerings && restaurant.polls) setLoading(false);
    if(restaurant.lat) {
      setPageLat(lat);
      setPageLng(lng);
    }
  }, [restaurant]);

  return {
    id,
    restaurant,
    offerings,
    polls,
    lat,
    lng,
    pageLat,
    pageLng,
    loading
  };
};


export const useRestaurantShortList = restaurantsCopy => {
  const shuffle = restaurantsCopy => {
    let ctr = restaurantsCopy.length, temp, index;
    while (ctr > 0) {// Pick a random index
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = restaurantsCopy[ctr];
        restaurantsCopy[ctr] = restaurantsCopy[index];
        restaurantsCopy[index] = temp;
    };
    return restaurantsCopy;
  };
  
  const randomizedOrder = shuffle(restaurantsCopy);
  const restaurantShortList = randomizedOrder.slice(0,5);

  return {
    restaurantShortList
  };
}

