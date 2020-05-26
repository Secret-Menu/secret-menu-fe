import React from 'react';
import { useSelector } from 'react-redux';
import OfferingDetail from './OfferingDetail';

const AllOfferings = () => {
  

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
