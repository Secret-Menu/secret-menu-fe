import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OfferingDetail from './OfferingDetail';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { setBusinessOfferings } from '../../../../actions/businessActions';
import { selectOfferings } from '../../../../selectors/businessSelectors';

const AllOfferings = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const offerings = useSelector(selectOfferings);

  useEffect(() => {if(user) dispatch(setBusinessOfferings(user.restaurant[0]._id));}, [user]);

  const offeringsToList = offerings.map(offering => (
    <li key={offering._id}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <div>
        {offeringsToList}
    </div>
  );
};

export default AllOfferings;
