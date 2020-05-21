import React from 'react';

export default Error = ({ error }) => (
  <>
    {errpr && <p>{error}</p>}
  </>
);

Error.propTypes = {
  error: PropTypes.string
};