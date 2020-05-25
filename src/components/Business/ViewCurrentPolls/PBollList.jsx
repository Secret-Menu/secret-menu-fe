import React from 'react';
import BPollDetail from './BPollDetail';

const BLivePollsList = () => {
  //get polls per restaurant --hook? selector??

  const pollsToList = polls.map(poll => (
    <li key={`${offering.dishName} + ${offering._id}`}>
      <BPollDetail {...poll} />
    </li>
  ));

  return (
    <>
      <ul>
        {pollsToList}
      </ul>
    </>
  );
};



export default BLivePollsList;
