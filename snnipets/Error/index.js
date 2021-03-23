import React from 'react';
import PropTypes from 'prop-types';

function Error({ message }) {
  return (
    <div className="alert alert-error">
      <i className="fas fa-exclamation-triangle" />
      <p>{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
