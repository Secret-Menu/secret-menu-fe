import React from 'react';
import { useDispatch } from 'react-redux';
import { getAreaAction } from '../../actions/restaurantActions';

export default function AreaDetail(){
  const dispatch = useDispatch();

  dispatch(getAreaAction('northwest'));

  return (
    <div>
      
    </div>
  );
}
