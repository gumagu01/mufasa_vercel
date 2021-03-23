import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function GoBackButton({ url }) {
  const router = useRouter();

  const handleBack = () => {
    if (url) {
      router.push(url);
    } else {
      router.back();
    }
  };

  return (
    <div className="mb-4">
      <button className="btn btn-dark" onClick={handleBack} type="button">
        <i className="fas fa-long-arrow-alt-left" />
        {' '}
        Voltar
      </button>
    </div>
  );
}

GoBackButton.propTypes = {
  url: PropTypes.string,
};
GoBackButton.defaultProps = {
  url: '',
};

export default GoBackButton;
