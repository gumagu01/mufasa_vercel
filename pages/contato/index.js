import React from 'react';
import SupportContainer from '../../components/SupportContainer';
import SupportForm from '../../sections/SupportForm';
import SectionTitle from '../../snnipets/SectionTitle';

function Contato() {
  return (
    <SupportContainer className="translate-header">
      <SectionTitle>
        Como podemos ajudar?
      </SectionTitle>
      <SupportForm />
    </SupportContainer>
  );
}

export default Contato;
