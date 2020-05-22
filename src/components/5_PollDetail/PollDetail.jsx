import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './PollDetail.css';
 
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
 
// Modal.setAppElement('#root');

const PollDetail = ({ poll }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
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
        <div className={styles.PollModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{poll.name}</h2>
          <div className={styles.Orderings}>
            <div className={styles.Offering}>
              <img src={poll.offering1ImageUrl} alt={poll.offering1ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering1Name}>{poll.offering1Name}</label>
              <input type="radio" value={poll.offering1Name} name="vote" id={poll.offering1Name} />
            </div>
            <div className={styles.Offering}>
              <img src={poll.offering2ImageUrl} alt={poll.offering2ImageUrl} height="200" width="300"/>
              <label htmlFor={poll.offering2Name}>{poll.offering2Name}</label>
              <input type="radio" value={poll.offering2Name} name="vote" id={poll.offering2Name} />
            </div>
          </div>
          <button onClick={closeModal}>Vote</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

PollDetail.propTypes = {
  poll: PropTypes.object
};

export default PollDetail;
