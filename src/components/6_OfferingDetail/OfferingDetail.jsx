import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useCurrentUser } from '../../hooks/authHooks';
import styles from './OfferingDetail.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
 
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useCurrentUser();
  const dispatch = useDispatch();
  let subtitle;
  
  const openModal = () => {
    setIsOpen(true);
  };
 
  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };
 
  const closeModal = () => {
    setIsOpen(false);
  };

  const lineItem = {
    offeringId: offering._id,
    price: offering.price,
    offering: offering.dishName,
    quantity: 4,
    price: 500
  }

  const handleAddToCart = lineItem => {
    dispatch(addToCart(lineItem));
  }

  const isLogged = () => {
    if(user) {
      return ( 
        <>
          <label>Quantity</label>
          <input type="number" min="1" max={offering.numRemaining} step="1" defaultValue="1" />
          <button onClick={() => handleAddToCart(lineItem)}>Add To Cart</button>
          <button onClick={closeModal}>Close</button>
        </>
      );
    } else {
      return (
        <>
          <h1>Login to purchase!</h1>
        </>
      );
    }
  };
 
  return (
    <li className={styles.OfferingDetail}>
      <button id={offering._id} onClick={openModal}>Open Modal</button>
      <label htmlFor={offering._id}><img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/></label>
      <p>{offering.dishName}</p>
      {offering.numRemaining < 30 ? <p>{offering.numRemaining} left!</p> : null}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Offering Modal"
      >
        <div className={styles.ModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{offering.dishName}</h2>
          <img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/>
          <p>{`$${offering.price / 100}`}</p>
          <p>{offering.description}</p>
          {isLogged()}
        </div>      
      </Modal>
    </li>
  );
};

OfferingDetail.propTypes = {
  offering: PropTypes.object
};

export default OfferingDetail;
