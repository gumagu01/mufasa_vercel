import React from 'react';
import SectionContainer from '../../components/DarfLp';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

function DarfLp() {
  return (
    <SectionContainer>
      <SectionContainer.BgImage>
        <SectionContainer.Bg />
      </SectionContainer.BgImage>
      <div>
        <SectionContainer.Text>
          <h3>
            DARF
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
            color="#8E8E8E"
            bg="linear-gradient(120deg, #8E8E8E 0%, #8E8E8E 100%)"
            otherStyles={{
              margin: '20px auto 0 0',
              fontSize: '1.125rem',
            }}
          >
            Quero começar
            <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
          </ButtonUnderlineHover>
        </SectionContainer.Text>
      </div>
    </SectionContainer>
  );
}

export default DarfLp;
