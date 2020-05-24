import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PollDetail from './PollDetail';
import styles from './PollCarousel.css';

const PollCarousel = ({ polls }) => {
  const [current, setCurrent] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(styles.BeforeFade);
  const carouselMax = polls.length - 1;

  const handleCarousel = (change) => {
    if(change === -1) setCurrentStyle(styles.Right);
    if(change === 1) setCurrentStyle(styles.Left);
    setTimeout(() => {
      setCurrentStyle(styles.BeforeFade);
    }, 1000);

    setCurrent(current + change);
  };

  if(polls.length > 0) { 
    return (
      <div className={styles.PollCarousel}>
        <button name="left" onClick={() => handleCarousel(-1)} disabled={current === 0}>&larr;</button>
        <div className={currentStyle}>
          <PollDetail poll={polls[current]} key={polls[current]._id}/>
        </div>
        <button name="right" onClick={() => handleCarousel(+1)} disabled={current === carouselMax}>&rarr;</button>
      </div>
    ); 
  } else { 
    return (
      <div className={styles.PollCarousel}>
        <h3>No current polls...</h3>
      </div>
    ); 
  }
};

PollCarousel.propTypes = {
  polls: PropTypes.array
};

export default PollCarousel;
