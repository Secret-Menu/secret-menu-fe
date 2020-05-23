import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './PollDetail.css';
import { useCurrentUser } from '../../hooks/authHooks';
import { fetchVote } from '../../services/polls-api';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('body');

const PollDetail = ({ poll }) => {
  const [count, setCount] = useState('');
  const [choice, setChoice] = useState('');
  const user = useCurrentUser();

  useEffect(() => {
    dateConversion(poll);
  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setInterval(dateConversion(poll), 1000);
  }
 
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  function vote() {
    console.log(choice);
    console.log(poll[choice]);
    console.log(poll._id);
    fetchVote(poll._id, choice.toString(), 20)
      .then(res => console.log(res));
  }

  const dateConversion = (poll) => {
    const convertedDate = new Date(poll.end);
    const today = new Date();
    const diff = convertedDate - today;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeRemaining = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`;
    setCount(timeRemaining);
    setTimeout(() => dateConversion(poll), 1000);
  };

  const isLogged = () => {
    if(user) {
      return (
        <div className={styles.PollModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{poll.name}</h2>
          <div className={styles.Orderings}>
            <div className={styles.Offering}>
              <img src={poll.offering1ImageUrl} alt={poll.offering1ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering1Name}>{poll.offering1Name}</label>
              <input type="radio" value={poll.offering1Name} name="vote" id={poll.offering1Name} onChange={() => setChoice('offering1Votes')}/>
            </div>
            <div className={styles.Offering}>
              <img src={poll.offering2ImageUrl} alt={poll.offering2ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering2Name}>{poll.offering2Name}</label>
              <input type="radio" value={poll.offering2Name} name="vote" id={poll.offering2Name} onChange={() => setChoice('offering2Votes')}/>
            </div>
          </div>
          <button onClick={vote}>Vote</button>
          <button onClick={closeModal}>Close</button>
          <h1>{count}</h1>
        </div>
      );
    } else {
      return (
        <div className={styles.PollModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{poll.name}</h2>
          <div className={styles.Orderings}>
            <div className={styles.Offering}>
              <img src={poll.offering1ImageUrl} alt={poll.offering1ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering1Name}>{poll.offering1Name}</label>
              <input type="radio" value={poll.offering1Name} name="vote" id={poll.offering1Name}/>
            </div>
            <div className={styles.Offering}>
              <img src={poll.offering2ImageUrl} alt={poll.offering2ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering2Name}>{poll.offering2Name}</label>
              <input type="radio" value={poll.offering2Name} name="vote" id={poll.offering2Name}/>
            </div>
          </div>
          <h1>Login to vote!</h1>
          <h1>{count}</h1>
        </div>
      );
    }
  };
 
  return (
    <div className={styles.PollDetail}>
      <div className={styles.PollBox} onClick={openModal}>
        <h3>{poll.name}</h3>
        <p>{`${poll.offering1Name} vs. ${poll.offering2Name}`}</p>
      </div>   
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Voting Modal"
      >
        {isLogged()}
      </Modal>
    </div>
  );
};

PollDetail.propTypes = {
  poll: PropTypes.object
};

export default PollDetail;
