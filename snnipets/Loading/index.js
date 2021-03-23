import React from 'react';

function Loading() {
  return (
    <div className="request-loading">
      <i className="fa fa-spinner fa-spin" />
      {' '}
      Carregando...
    </div>
  );
}

export default Loading;
