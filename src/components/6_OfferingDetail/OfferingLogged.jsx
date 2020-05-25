import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../hooks/authHooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../selectors/cartSelectors';
import { updateCartItem, addToCart } from '../../actions/cartActions';

const OfferingLogged = ({ offering, restaurant, closeModal }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const cart = useSelector(selectCart);
  
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
    };
  
    const handleAddToCart = lineItem => {
      let existingLineItem = cart.find(lineItem => lineItem.offeringId === offering._id);
      if(existingLineItem) {
        const i = cart.findIndex(lineItem => lineItem.offeringId = offering._id);
        dispatch(updateCartItem(i, lineItem));
      }
      else dispatch(addToCart(lineItem));
    };
  
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
    <>
      {isLogged()}
    </>
  );
};

OfferingLogged.propTypes = {
  offering: PropTypes.object,
  restaurant: PropTypes.object,
  closeModal: PropTypes.func
};

export default OfferingLogged;
