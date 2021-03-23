import React from 'react';
import SectionContainer from '../../components/WalletLp';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

function WalletLp() {
  return (
    <SectionContainer>
      <SectionContainer.SideText>
        <h3>
          Carteira
        </h3>
        <p>
          Importe seus dados do
          CEI (Canal Eletrônico do
          Investidor), e acesse em
          tempo real seu extrato
          para analisar a evolução
          da sua carteira.
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
        <img src="/images/landingPage/StocksGoUp.webp" alt="Acompanhamento de Carteira" />
      </SectionContainer.ImgContainer>
    </SectionContainer>
  );
}

export default WalletLp;
