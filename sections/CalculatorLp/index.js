import React from 'react';
import SectionContainer from '../../components/CalculatorLp';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

function CalculatorLp() {
  return (
    <SectionContainer>
      <SectionContainer.SideText>
        <h3>
          Calculadora
        </h3>
        <p>
          Calcule seus impostos de
          forma 100% automática,
          levando em conta as
          movimentações e as
          compensações acumuladas.
        </p>
        <ButtonUnderlineHover
          href="/"
          color="#c95206"
          bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
          otherStyles={{
            margin: '20px auto 0 0',
            fontSize: '1.125rem',
          }}
        >
          Quero começar
          <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </SectionContainer.SideText>
      <SectionContainer.ImgContainer>
        <img src="/images/landingPage/Calculator.webp" alt="Acompanhamento de Carteira" />
      </SectionContainer.ImgContainer>
    </SectionContainer>
  );
}

export default CalculatorLp;
