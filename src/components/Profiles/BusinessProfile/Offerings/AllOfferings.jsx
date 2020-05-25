import React from 'react';
import OfferingDetail from './OfferingDetail';

const AllOfferings = () => {
  //get offerings per restaurant --hook? selector??

  const offeringsToList = offerings.map(offering => (
    <li key={`${offering.dishName} + ${offering._id}`}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <>
      <td>
        {ordersToList}
      </td>
    </>
  );
};



export default AllOfferings;
