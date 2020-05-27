import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectPolls } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import PollDetail from './PollDetail';

const UpcomingPolls = () => {
  const user = useCurrentUser();
  const polls = useSelector(selectPolls);
console.log(polls)
  const pollsToList = polls.map(poll => (
    <li key={poll._id}>
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

UpcomingPolls.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    offering1Name: PropTypes.string,
    offering2Name: PropTypes.string,
    start: PropTypes.date,
    end: PropTypes.date,
    offering1Votes: PropTypes.number,
    offering2Votes: PropTypes.number,
    offering1ImageUrl: PropTypes.string,
    offering2ImageUrl: PropTypes.string,
    status: PropTypes.string
  }))
};

export default UpcomingPolls;
