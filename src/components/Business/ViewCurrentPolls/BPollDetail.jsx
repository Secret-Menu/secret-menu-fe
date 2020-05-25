import React from 'react';
import PropTypes from 'prop-types';


//a poll for a restaurant

const BPollDetail = (poll) => (
  <>
      <div>
        <img src={poll.offering1ImageUrl} alt="Offering Image"></img>
        <h4>{poll.offering1Name}</h4>
        <p>{poll.offering1Description}</p>
        <p>{poll.offering1Votes}</p>
      </div>

      <div>
        <img src={poll.offering2ImageUrl} alt="Offering Image"></img>
        <h4>{poll.offering2Name}</h4>
        <p>{poll.offering2Description}</p>
        <p>{poll.offering2Votes}</p>
      </div>
  </>
);

BPollDetail.propTypes = {
  poll: PropTypes.object
};

export default BPollDetail;
