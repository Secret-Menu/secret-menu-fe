import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
import { selectCart } from '../../selectors/cartSelectors';
import styles from './Order.css';

export default function Order() {
  const cart = useSelector(selectCart);

  const lineItemNodes = cart.map(lineItem => 
    <tr>
      <td>{lineItem.restaurant}</td>
      <td>{lineItem.offering}</td>
      <td>{lineItem.quantity}</td>
      <td>PICKUP HERE</td>
      <td>{lineItem.price}</td>
      <td>{lineItem.total}</td>
    </tr>
);

const cartTotal = cart.reduce((acc, curr) => {
  acc = acc + curr.total;
  return acc;
}, 0)

  return (
    <div>
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
          <td>{cartTotal}</td>
        </tr>
      </table>
      <CheckoutForm />
    </div>
  );
}
