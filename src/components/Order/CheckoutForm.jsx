import React, { useState } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useCurrentUser } from '../../hooks/authHooks';
import styles from './CheckoutForm.css';

const CheckoutForm = ({ cartTotal }) => {
  const user = useCurrentUser();
  const stripe = useStripe();
  const elements = useElements();
  const [nameOnCard, setNameOnCard] = useState('');

  const handleSubmit = async(event) => {
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
    if (result.error) {
      console.log(reset.error.message);
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const response = await fetch(`${process.env.API_URL}/api/v1/checkout/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_method_id: result.paymentMethod.id,
          cartTotal
        }),
      });

      const serverResponse = await response.json();

      handleServerResponse(serverResponse);
    }
  };

  const handleServerResponse = (serverResponse) => {
    if (serverResponse.error) {
      console.log(serverResponse.error);
    } else {
      console.log('Success!');
    }
  };

  const handleChange = ({ target }) => {
    setNameOnCard(target.value);
  }

  const handleCardChange = (event) => {
    if (event.error) {
     console.log(event.error.message);
    }
  };

  return (
      <section className={styles.stripeForm}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={nameOnCard} onChange={handleChange} placeholder="Name on card" />
          <CardElement onChange={handleCardChange} />
          <button type="submit" disabled={!stripe}>Submit Payment</button>
        </form>
      </section>
  );
};

export default CheckoutForm;