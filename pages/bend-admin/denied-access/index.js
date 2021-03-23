import React from 'react';
import Link from 'next/link';

function deniedAccess() {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <div
          className="alert alert-error"
          style={{ paddingTop: '0' }}
        >
          <i className="fas fa-exclamation-triangle" />
          <p>Acesso Negado</p>
        </div>
        <div className="mx-auto w-100 text-center">
          <Link href="/"><a className="btn btn-danger px-3">Ir para o site</a></Link>
        </div>
      </div>
    </>
  );
}

export default deniedAccess;
