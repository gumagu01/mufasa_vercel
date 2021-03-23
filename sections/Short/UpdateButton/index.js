import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../snnipets/Loading';

function UpdateButton({ onClick, loading, textContent }) {
  return (
    <button
      type="submit"
      className="btn btn-dark"
      onClick={onClick}
    >
      {
                        loading
                          ? (
                            <>
                              <Loading />
                            </>
                          ) : (
                            textContent
                          )
                    }
    </button>
  );
}

UpdateButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};
UpdateButton.defaultProps = {
  onClick: () => {},
};

export default UpdateButton;
