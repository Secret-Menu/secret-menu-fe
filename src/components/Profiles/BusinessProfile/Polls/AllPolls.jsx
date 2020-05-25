import React from 'react';
import PollDetail from './PollDetail';

const AllPolls = () => {
  //get polls per restaurant --hook? selector??

  const pollsToList = polls.map(poll => (
    <li key={`${offering.dishName} + ${offering._id}`}>
      <PollDetail {...poll} />
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



export default AllPolls;
