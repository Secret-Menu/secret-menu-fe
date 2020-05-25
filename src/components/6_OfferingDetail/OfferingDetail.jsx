import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useCurrentUser } from '../../hooks/authHooks';
import styles from './OfferingDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem } from '../../actions/cartActions';
import { selectCart } from '../../selectors/cartSelectors';
 
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

const OfferingDetail = ({ offering, restaurant }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
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

  const [quantity, setQuantity] = useState(1);

  const isLogged = () => {
    const lineItem = {
      restaurant: restaurant.restaurantName,
      restaurantId: restaurant._id,
      offeringId: offering._id,
      price: offering.price,
      offering: offering.dishName,
      quantity: Number(quantity),
      total: offering.price * Number(quantity)
    };

    const handleChange = ({ target }) => {
      setQuantity(target.value);
    }

    console.log(cart.includes(offering._id));
  
    const handleAddToCart = lineItem => {
      let existingLineItem = cart.find(lineItem => lineItem.offeringId === offering._id);
      if(existingLineItem) {
        const i = cart.findIndex(lineItem => lineItem.offeringId = offering._id);
        dispatch(updateCartItem(i, lineItem))
      }
      else dispatch(addToCart(lineItem));
    }
  


    if(user) {
      return ( 
        <>
          { offering.numRemaining > 0 
            ? <>
                <label>Quantity</label>
                <input type="number" min="1" max={offering.numRemaining} step="1" value={quantity} onChange={handleChange} />
                <button onClick={() => handleAddToCart(lineItem)}>Add to Cart</button> 
              </>
            : <button disabled="true">Sold Out!</button>
          }
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
  offering: PropTypes.object,
  restaurant: PropTypes.object
};

export default OfferingDetail;
