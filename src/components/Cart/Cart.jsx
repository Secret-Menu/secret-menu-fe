import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../selectors/cartSelectors';
import styles from './Cart.css';
import { removeFromCart } from '../../actions/cartActions';
import { useCurrentUser } from '../../hooks/authHooks';
import { convertToDollars } from '../../services/money';
import { FaTrashAlt } from 'react-icons/fa';

export default function Cart() {
  const user = useCurrentUser();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = i => {
    dispatch(removeFromCart(i));
  };

  const lineItemNodes = cart.map((lineItem, i) => {
    const pickUpDate = new Date(lineItem.pickUpDate);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const pickUpYear = `${pickUpDate.toLocaleDateString(undefined, options)} ${pickUpDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;

    return (
      <tr key={lineItem._id}>
        <td>{lineItem.restaurant}</td>
        <td>{lineItem.offering}</td>
        <td>{lineItem.quantity}</td>
        <td>{pickUpYear}</td>
        <td>{convertToDollars(lineItem.price)}</td>
        <td>{convertToDollars(lineItem.total)}</td>
        <td>
          <button onClick={() => handleRemoveFromCart(i)}><FaTrashAlt /></button>
        </td>
      </tr>
    )
  }

  );

  const cartTotalRaw = cart.reduce((acc, curr) => {
    acc = acc + curr.total;
    return acc;
  }, 0);
  const cartTotal = convertToDollars(cartTotalRaw);

  const lineItemsForOrder = cart.map(lineItem => ({
    offering: lineItem.offeringId,
    quantity: lineItem.quantity,
    pickUpDate: lineItem.pickUpDate,
    orderStatus: 'Open',
  }));

  
  const orderToBeCreated = {
    orderNumber: Date.now(),
    user: user?._id,
    restaurant: cart[0].restaurantId,
    offering: lineItemsForOrder,
    orderTotal: cartTotalRaw
  };

  const restaurant = cart[0].restaurantId;
  const tooManyRestaurants = cart.find(item => restaurant !== item.restaurantId);

  return (
    cart.length > 0
      ? <div className={styles.Cart}>
        <h2 className={styles.CartHeader}>Checkout</h2>
        <table className={styles.CartTable}>
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
            <tr>
              <td colSpan="6" id={styles.cartTotal}>Order total: {cartTotal}</td>
            </tr>
          </tfoot>
        </table>
        { tooManyRestaurants ? 'Orders can only placed at one restaurant at a time' : <CheckoutForm order={orderToBeCreated} cartTotal={cartTotalRaw}/> }
      </div>
      : <p>You have no items in your cart!</p>
  );
}
