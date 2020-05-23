import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './OfferingDetail.css';
import { useCurrentUser } from '../../hooks/authHooks';
 
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

const OfferingDetail = ({ offering }) => {
  const user = useCurrentUser();

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const isLogged = () => {
    if(user) {
      return ( 
        <div className={styles.ModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{offering.dishName}</h2>
          <img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/>
          <p>{`$${offering.price}`}</p>
          <button onClick={closeModal}>Add To Cart</button>
          <button onClick={closeModal}>Close</button>
        </div>
      );
    } else {
      return (
        <div className={styles.ModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{offering.dishName}</h2>
          <img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/>
          <p>{`$${offering.price}`}</p>
          <h1>Login to purchase!</h1>
        </div>
      );
    }
  };
 
  return (
    <li className={styles.OfferingDetail}>
      <button id={offering._id} onClick={openModal}>Open Modal</button>
      <label htmlFor={offering._id}><img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/></label>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Offering Modal"
      >
        {isLogged()}
      </Modal>
    </li>
  );
};

OfferingDetail.propTypes = {
  offering: PropTypes.object
};

export default OfferingDetail;
