import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import CheckOutForm from './CheckoutForm';
import NoCart from './NoCart';
import { selectCart } from '../../selectors/cartSelectors';

export default function CheckOut() {

  const cart = useSelector(selectCart);

  cart.length > 0

  return (
    <>
      { cart.length > 0
          ? <>
              <Cart />
            </>
          : <NoCart />
      }
    </>
  )
}