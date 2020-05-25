import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../selectors/cartSelectors';
import styles from './Cart.css';
import { removeFromCart } from '../../actions/cartActions';

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = i => {
    dispatch(removeFromCart(i));
  }

  const handleUpdateCart = (i, lineItem) => {
    dispatch(updateCartItem(i,))
  }

  const lineItemNodes = cart.map((lineItem, i) => 
    <tr>
      <td>{lineItem.restaurant}</td>
      <td>{lineItem.offering}</td>
      <td>{lineItem.quantity}</td>
      <td>PICKUP HERE</td>
      <td>{lineItem.price}</td>
      <td>{lineItem.total}</td>
      <td>
        <button onClick={() => handleRemoveFromCart(i)}>Remove</button>
      </td>
    </tr>
);

  const cartTotalRaw = cart.reduce((acc, curr) => {
    acc = acc + curr.total;
    return acc;
  }, 0);
  const cartTotalDollars = cartTotalRaw / 100;
  const cartTotal = `$${cartTotalDollars}.00`;


  return (
    cart.length > 0
    ? <div>
      <h2>Cart</h2>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Offering</th>
            <th>Quantity</th>
            <th>Pick-Up Date</th>
            <th>Price (Ind.)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          { lineItemNodes }
        </tbody>
        <tfoot>
        </tfoot>
        <tr>
          <td colSpan="6" id={styles.cartTotal}>Order total: {cartTotal}</td>
        </tr>
      </table>
      <CheckoutForm cartTotal={cartTotalRaw}/>
    </div>
  : <p>You have no items in your cart!</p>
  );
};
