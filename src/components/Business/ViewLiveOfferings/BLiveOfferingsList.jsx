import React from 'react';
import BOfferingDetail from './BOfferingDetail';

const BLiveOfferingsList = () => {
  //get offerings per restaurant --hook? selector??

  const offeringsToList = offerings.map(offering => (
    <li key={`${offering.dishName} + ${offering._id}`}>
      <BOfferingDetail {...offering} />
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



export default BLiveOfferingsList;
