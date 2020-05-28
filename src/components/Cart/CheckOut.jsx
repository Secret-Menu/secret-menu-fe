import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';
import NoCart from './NoCart';
import { selectCart } from '../../selectors/cartSelectors';
import { loadCart } from '../../actions/cartActions';

export default function CheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart'));
    if(!storedCart) sessionStorage.setItem('cart', JSON.stringify(cart));
    dispatch(loadCart(storedCart));
  }, []);

  useEffect(() => {
    const newCart = sessionStorage.setItem('cart', JSON.stringify(cart));
    if(!newCart) return;
    dispatch(loadCart(newCart));
  }, [cart]);
  

  cart.length > 0;

  return (
    <>
      { cart.length > 0
        ? <>
          <Cart />
        </>
        : <NoCart />
      }
    </>
  );
}
