import React from 'react';
import PropTypes from 'prop-types';


//offerings in an order

const BOfferingDetail = (offering) => (
  <>
      <div>
        <img src={offering.imageUrl} alt="Offering Image"></img>
        <h4>{offering.dishName}</h4>
        <p>{offering.description}</p>
        <p>{offering.price}</p>
      </div>
  </>
);

BOfferingDetail.propTypes = {
  offering: PropTypes.object
};

export default BOfferingDetail;
