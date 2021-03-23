import React from 'react';
import SectionContainer from '../../components/AutomaticPayment';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

function AutomaticPayment() {
  return (
    <SectionContainer>
      <SectionContainer.BgImage>
        <SectionContainer.Bg />
      </SectionContainer.BgImage>
      <SectionContainer.Text>
        <h3>
          Pagamento Automático
        </h3>
        <p>
          A Calculadora do Mufasa,
          além de realizar os cálculos,
          disponibiliza a impressão do
          DARF quando você opera
          com lucro.
        </p>
        <ButtonUnderlineHover
          href="/"
          color="#E49447"
          bg="linear-gradient(120deg, #E49447 0%, #E49447 100%)"
          otherStyles={{
            margin: '20px auto 0 0',
            fontSize: '1.125rem',
          }}
        >
          Quero começar
          <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </SectionContainer.Text>
    </SectionContainer>
  );
}

export default AutomaticPayment;
