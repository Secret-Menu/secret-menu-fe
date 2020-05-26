import React from 'react';
import { useSelector } from 'react-redux';
import { selectOfferings } from '../../../../selectors/businessSelectors';

//offerings in an order

const OfferingDetail = () => {
  const offering = useSelector(selectOfferings);

  return (
  <>
    <div>
      <img src={offering.imageUrl} alt="Offering Image"></img>
      <h4>{offering.dishName}</h4>
      <p>{offering.description}</p>
      <p>{offering.price}</p>
    </div>
  </>
  )
};

export default OfferingDetail;
