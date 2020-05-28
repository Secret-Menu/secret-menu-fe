import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';

const PollDetail = (poll) => {
  const user = useCurrentUser();
  return (
    <>
      <div>
        <img src={poll.offering1ImageUrl} alt="Offering Image" height="200" width="300"></img>
        <h4>{poll.offering1Name}</h4>
        <p>{poll.offering1Description}</p>
        <p>{poll.offering1Votes}</p>
      </div>

      <div>
        <img src={poll.offering2ImageUrl} alt="Offering Image" height="200" width="300"></img>
        <h4>{poll.offering2Name}</h4>
        <p>{poll.offering2Description}</p>
        <p>{poll.offering2Votes}</p>
      </div>
      <p>Start Date: {poll.start} </p>
      <p>End Date: {poll.end} </p>
    </>
  );};
PollDetail.propTypes = {
  poll: PropTypes.object
};
export default PollDetail;
