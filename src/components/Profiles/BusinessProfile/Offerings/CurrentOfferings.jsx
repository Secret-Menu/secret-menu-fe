//upcoming orders table

import React from 'react';
import OfferingDetail from './OfferingDetail';

const UpcomingOrders = () => {
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
