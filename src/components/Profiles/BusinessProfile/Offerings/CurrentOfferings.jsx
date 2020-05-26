//upcoming orders table

import React from 'react';
import { useSelector } from 'react-redux';
import OfferingDetail from './OfferingDetail';

const CurrentOfferings = () => {
  const offerings = useSelector(selectOfferings);

  const offeringsToList = offerings.map(offering => (
    <li key={offering._id}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <>
      <ul>
        {offeringsToList}
      </ul>
    </>
  );
};

export default CurrentOfferings;
