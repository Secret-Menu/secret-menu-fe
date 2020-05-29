import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OfferingDetail from './OfferingDetail';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { setBusinessOfferings } from '../../../../actions/businessActions';
import { selectOfferings } from '../../../../selectors/businessSelectors';
import styles from './AllOfferings.css';

const AllOfferings = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const offerings = useSelector(selectOfferings);

  useEffect(() => {if(user) 
    dispatch(setBusinessOfferings(user.restaurant[0]._id));
  }, [user]);
  
  const offeringsToList = offerings.map(offering => (
    <li key={offering._id} className={styles.OfferingItem}>
      <OfferingDetail {...offering} />
    </li>
  ));

  return (
    <div className={styles.AllOfferings}>
      <h2>All Offerings</h2>
      <ul className={styles.OfferingsList}>
        {offeringsToList}
      </ul>
    </div>
  );
};

export default AllOfferings;
