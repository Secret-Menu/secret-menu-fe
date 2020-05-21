import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <>
    {error && <p>{error}</p>}
  </>
);

Error.propTypes = {
  error: PropTypes.string
};

export default Error;
