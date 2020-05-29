import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAllRestaurant, searchAreaRestaurant } from '../../actions/restaurantActions';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

const Search = ({ type }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    event.preventDefault();
    if(type === 'all') dispatch(searchAllRestaurant(name, category));
    else dispatch(searchAreaRestaurant(name, category, type));
    if(location.pathname === '/') history.push('/portland');
    console.log(location);
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'category') setCategory(target.value);
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
        <button><RiSearchLine /></button>
      </form>
    </>
  );};

Search.propTypes = {
  type: PropTypes.string
};

export default Search;
