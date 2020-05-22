import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PollDetail from './PollDetail';
import styles from './PollCarousel.css';

const PollCarousel = ({ polls }) => {
  const [current, setCurrent] = useState(0);
  const carouselMax = polls.length - 1;

  const handleCarousel = (change) => {
    setCurrent(current + change);
  };

  return (
    <div className={styles.PollCarousel}>
      <button onClick={() => handleCarousel(-1)} disabled={current === 0}>&larr;</button>
      <PollDetail poll={polls[current]} key={polls[current]._id}/>
      <button onClick={() => handleCarousel(+1)} disabled={current === carouselMax}>&rarr;</button>
    </div>
  );
};

PollCarousel.propTypes = {
  polls: PropTypes.array
};

export default PollCarousel;
