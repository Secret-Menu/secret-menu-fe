import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../../hooks/authHooks';

const UpcomingOrdersDetail = ({ placedDate, offering, quantity, customerName, orderNumber, status, pickUpDate }) => {
  const user = useCurrentUser();

  return (
    <>
      
    </>
  )
}