import React, { useEffect, useState } from 'react';
import Map from '../Map/Map';
import PDXQuadrants from './PDXQuadrants';
import { pdxAnchor } from '../../services/map-utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../../actions/restaurantActions';
import { selectAllRestaurants } from '../../selectors/restaurantSelectors';

export default function PDXMap() { 
  const [name, setName] = useState('');
  const [category, setCategoy] = useState('');
  const [restTest, setRestTest] = useState([]);

  const dispatch = useDispatch();
  const restaurants = useSelector(selectAllRestaurants);
  if(restTest.length < 0) setRestTest(restaurants);
  console.log(restTest);

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  const handleSearch = () => {
    event.preventDefault();
    console.log(name, category);
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'category') setCategoy(target.value);
  };

  return (
    <div>
      <div style={{ height: '60vh', width: '100%', margin: '0 auto' }}>
        <Map center={pdxAnchor.center} zoom={pdxAnchor.zoom} markers={restaurants}/>
      </div>
      <form onSubmit={handleSearch}>
        <input type="text" 
          value={name} 
          name="name" 
          onChange={handleChange} 
          placeholder="Search by name" />
        <input type="text" 
          value={category} 
          name="category" 
          onChange={handleChange} 
          placeholder="Search by category" />
        <button>Search</button>
      </form>
      <PDXQuadrants restaurants={restaurants} />
    </div>
  );
}
