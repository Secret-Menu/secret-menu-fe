import React from 'react';
import { useSelector } from 'react-redux';
import OfferingDetail from './OfferingDetail';

const AllOfferings = () => {
  const offerings = useSelector(selectOfferings);

  const offeringsToList = offerings.map(offering => (
    <li key={`${offering.dishName} + ${offering._id}`}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <>
      <td>
        {offeringsToList}
      </td>
    </>
  );
};



export default AllOfferings;
