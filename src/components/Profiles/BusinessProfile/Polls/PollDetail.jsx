import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';
import styles from './PollDetail.css';

const PollDetail = (poll) => {
  const user = useCurrentUser();
  return (
    <>
      
      <p className={styles.PollName}>{poll.name}</p>
      <p className={styles.PollEnd}>Ends on {poll.end} </p>
      <div className={styles.PollDetail}>

        <div className={styles.PollOption}>
          <img src={poll.offering1ImageUrl} alt="Offering Image" height="200" width="300"></img>
          <h4>{poll.offering1Name}</h4>
          <p>{poll.offering1Description}</p>
          <p className={styles.PollVotes}>{poll.offering1Votes}</p>
        </div>

        <div className={styles.PollOption}>
          <img src={poll.offering2ImageUrl} alt="Offering Image" height="200" width="300"></img>
          <h4>{poll.offering2Name}</h4>
          <p>{poll.offering2Description}</p>
          <p className={styles.PollVotes}>{poll.offering2Votes}</p>
        </div>
      </div>
    </>
  );

};
PollDetail.propTypes = {
  poll: PropTypes.object
};
export default PollDetail;
