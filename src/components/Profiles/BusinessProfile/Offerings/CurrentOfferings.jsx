import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectOfferings } from '../../../../selectors/businessSelectors';
import { useCurrentUser } from '../../../../hooks/authHooks';
import OfferingDetail from './OfferingDetail';

const CurrentOfferings = () => {
  const user = useCurrentUser();
  const offerings = useSelector(selectOfferings);

  const offeringsToList = offerings.map(offering => (
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
