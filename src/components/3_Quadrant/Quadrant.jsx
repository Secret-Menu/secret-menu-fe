import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaAction } from '../../actions/restaurantActions';
import { getAreaState } from '../../selectors/restaurantSelectors';

export default function Quadrant(){
  const dispatch = useDispatch();
  dispatch(getAreaAction('northwest'));

  useEffect(() => {
    const restaurants = useSelector(getAreaState);
    
    return () => {
      cleanup
    }
  }, [input]);
  
  return (
    <div>
      
    </div>
  );
}
