import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectOfferings } from '../../../../selectors/businessSelectors';
import OfferingDetail from './OfferingDetail';

const CurrentOfferings = () => {
  const offerings = useSelector(selectOfferings);
  const offeringSample = offerings.map(offering => ({ ...offering, pickUpDate: new Date(offering.pickUpDate) }))
    .sort((a, b) => a.pickUpDate - b.pickUpDate)
    .filter(offering => offering.pickUpDate > new Date())
    .map(offering => ({ ...offering, pickUpDate: offering.pickUpDate.toString() }))
    .slice(0, 3);

  const offeringsToList = offeringSample.map(offering => (
    <li key={offering._id}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <>
      <ul>
        {offeringsToList}
      </ul>
    </>
  );
};
CurrentOfferings.propTypes = {
  offerings: PropTypes.arrayOf(PropTypes.shape({
    imageUrl: PropTypes.string,
    dishName: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
  }))
};
export default CurrentOfferings;
