import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAllRestaurant, searchAreaRestaurant } from '../../actions/restaurantActions';
import PropTypes from 'prop-types';

const Search = ({ type }) => {
  const [name, setName] = useState('');
  const [category, setCategoy] = useState('');
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    event.preventDefault();
    if(type === 'all') dispatch(searchAllRestaurant(name, category));
    else dispatch(searchAreaRestaurant(name, category, type));
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'category') setCategoy(target.value);
  };

  return (
    <>
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
    </>
  );};

Search.propTypes = {
  type: PropTypes.string
};

export default Search;
