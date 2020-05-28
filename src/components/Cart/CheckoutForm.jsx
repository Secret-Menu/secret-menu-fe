import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useCurrentUser } from '../../hooks/authHooks';
import styles from './CheckoutForm.css';
import { postOrder } from '../../services/orders-api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../actions/cartActions';

const CheckoutForm = ({ cartTotal, order }) => {
  const user = useCurrentUser();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [nameOnCard, setNameOnCard] = useState('');
  
  const handleSubmit = async(event, order) => {
    event.preventDefault();

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: nameOnCard,
      },
    });

    handlePaymentMethodResult(result);
  };

  const handlePaymentMethodResult = async(result) => {
    if(result.error) {
      toast.error(result.error.message);
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const response = await fetch(`${process.env.API_URL}/api/v1/checkout/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_method_id: result.paymentMethod.id,
          cartTotal
        })
      });
      const serverResponse = await response.json();
      handleServerResponse(serverResponse, order);
      
    }
  };

  const handleServerResponse = (serverResponse, order) => {
    if(serverResponse.error) {
      toast.error(serverResponse.error);
      console.log(serverResponse.error);
    } else {
      dispatch(resetCart());
      sessionStorage.setItem('cart', JSON.stringify([]));
      postOrder(order);
      toast.success('Thank You! Your order has been placed!');
      history.push(`/user/${user._id}`);
    }
  };

  const handleChange = ({ target }) => {
    setNameOnCard(target.value);
  };

  const handleCardChange = (event) => {
    if(event.error) {
      toast.error(event.error.message);
      console.log(event.error.message);
    }
  };

  return (
    <section className={styles.stripeForm}>
      <form onSubmit={() => handleSubmit(event, order)}>
        <input type="text" value={nameOnCard} onChange={handleChange} placeholder="Name on card" />
        <CardElement onChange={handleCardChange} />
        <button type="submit" disabled={!stripe}>Submit Payment</button>
      </form>
    </section>
  );
};

export default CheckoutForm;
