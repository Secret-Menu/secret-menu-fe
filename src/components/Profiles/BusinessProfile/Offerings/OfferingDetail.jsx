import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';
//offerings in an order

const OfferingDetail = ({ imageUrl, dishName, description, price }) => {
  const user = useCurrentUser();
  // const offering = useSelector(selectOfferings);

  return (
  <>
    <div>
      <img src={imageUrl} alt="Offering Image" height="200" width="300"></img>
      <p>{dishName}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  </>
  )
};
OfferingDetail.propTypes = {
  imageUrl: PropTypes.string,
  dishName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};
export default OfferingDetail;
