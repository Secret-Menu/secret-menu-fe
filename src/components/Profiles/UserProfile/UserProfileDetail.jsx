import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useCurrentUser } from '../../../hooks/authHooks';
import styles from './UserProfileDetail.css';
import { useDispatch } from 'react-redux';
 
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

const UserProfileDetail = ({ order }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

  const itemNodes = order.orders.map(order => <li key={order._id}>
    <img src={order.offering.imageUrl} />
    <p>Item: {order.offering.dishName}</p>
    <p>Quantity: {order.quantity}</p>
  </li>);
 
  return (
    <li className={styles.UserProfileDetail}>
      <a onClick={openModal}>{`${order.date.toLocaleDateString()} - ${order.info}`}</a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Orders Modal"
      >
        <div className={styles.ModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{order.info}</h2>
          <h3>{`${order.date.toLocaleDateString(undefined, options)}`}</h3>
          <ul>
            {itemNodes}
          </ul>
        </div>      
      </Modal>
    </li>
  );
};

UserProfileDetail.propTypes = {
  order: PropTypes.object
};

export default UserProfileDetail;
