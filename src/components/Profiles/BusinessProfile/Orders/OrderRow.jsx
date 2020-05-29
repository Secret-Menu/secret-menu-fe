import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const OrderRow = ({  orderNumber, orderTotal, orderStatus, user, _id }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/business/order/${_id}`);
  };

  const dollars = orderTotal / 100;
  const formattedTotal = dollars.toFixed(2);

  return (
    <tr onClick={handleClick}>
      <td>{orderNumber}</td>
      <td>{`$${formattedTotal}`}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
    </tr>
  );
};
OrderRow.propTypes = {
  imageUrl: PropTypes.string,
  dishName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  orderNumber: PropTypes.number,
  orderTotal: PropTypes.number,
  orderStatus: PropTypes.string,
  user: PropTypes.object,
  _id: PropTypes.string
};
export default OrderRow;
