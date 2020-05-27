import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';
import AllOrdersOfferings from './AllOrdersOfferings';

//all order DETAIL

// need to bring in all orders offerings
// need to get the orders, then map through the orders applying the all orders offerings component where as a k-v-p to the offerings: and then display this on all orders

//all offerings for each order

const AllOrderDetail = ({ imageUrl, dishName, description, price }) => {
const user = useCurrentUser();

// const orderNodes = orders.map(order => (
//   <li key{i}>

//   </li>
// ))

  return (
  <>
    <div>
      <img src={imageUrl} alt="Offering Image"></img>
      <h4>{dishName}</h4>
      <p>{description}</p>
      <p>{price}</p>
      {/* <AllOrdersOfferings /> */}
    </div>
  </>
  )
};
AllOrderDetail.propTypes = {
  imageUrl: PropTypes.string,
  dishName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};
export default AllOrderDetail;
