import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';
import AllOrdersOfferings from './OrderOfferings';
import { useHistory } from 'react-router-dom';

const OrderRow = ({  orderNumber, orderTotal, status, user, _id }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/business/order/${_id}`)
  }

  return (
    <tr onClick={handleClick}>
      <td>{orderNumber}</td>
      <td>{orderTotal}</td>
      <td>{status}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
    </tr>
  )
};
OrderRow.propTypes = {
  imageUrl: PropTypes.string,
  dishName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};
export default OrderRow;
