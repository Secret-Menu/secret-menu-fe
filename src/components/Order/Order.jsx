import React from 'react';
import CheckoutForm from './CheckoutForm';

export default function Order() {

  const orders = [
    {
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Hawaiian Mixed Plate Family Dinner',
      quantity: 2,
      pickUpDate: 'Friday 5/31/2020',
      price: 2000,
      total: 4000,
      id: 1,
    },
    {
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Hawaiian Mixed Plate Family Dinner',
      quantity: 2,
      pickUpDate: 'Friday 5/31/2020',
      price: 2000,
      total: 4000,
      id: 2
    },
    {
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Hawaiian Mixed Plate Family Dinner',
      quantity: 2,
      pickUpDate: 'Friday 5/31/2020',
      price: 2000,
      total: 4000,
      id: 3
    },
  ];

  const lineItemNodes = orders.map(order => 
    <tr key={order.id}>
      <td>{order.restaurant}</td>
      <td>{order.offering}</td>
      <td>{order.quantity}</td>
      <td>{order.pickUpDate}</td>
      <td>{order.price}</td>
      <td>{order.total}</td>
    </tr>
);

  return (
    <div>
      <h2>Cart</h2>
      <table>
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
      </table>
      <CheckoutForm />
    </div>
  );
}
