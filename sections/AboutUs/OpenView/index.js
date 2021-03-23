import React from 'react';
import styled from 'styled-components';

function OpenViewAboutUs() {
  return (
    <SecContainer>
      <SecContainer.FeaturedTitle>
        <p>
          No ano de 2020, mais de um milhão de
          brasileiros caiu na malha fina.
        </p>
      </SecContainer.FeaturedTitle>

      <div style={{ paddingLeft: '10vw', paddingTop: '10vh', textAlign: 'left' }}>
        <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'start' }}>
          Quem Somos
        </SecContainer.Title>
        <SecContainer.Text>
          O Mufasa é uma fintech brasileira especializada na tributação
          <br />
          relacionada ao mercado de investimentos.
          <br />
          <br />
          Lidar com tributos é uma tarefa complexa, principalmente em
          <br />
          um contexto de regras cada vez menos claras.
          <br />
          <br />
          Sabemos que o tempo dos traders é
          {' '}
          <SecContainer.OrangeColor>precioso</SecContainer.OrangeColor>
          {' '}
          demais para ser
          <br />
          gasto se preocupando com impostos. Por isso, temos por
          <br />
          objetivo
          {' '}
          <SecContainer.OrangeColor>facilitar</SecContainer.OrangeColor>
          {' '}
          a vida do investidor.
          <br />
        </SecContainer.Text>
      </div>

      <div style={{
        paddingRight: '10vw', paddingTop: '10vh', paddingBottom: '10vh', textAlign: 'right',
      }}
      >
        <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          Nossa Missão
        </SecContainer.Title>
        <SecContainer.Text>
          &quot;Proporcionar
          {' '}
          <SecContainer.OrangeColor>conforto</SecContainer.OrangeColor>
          {' '}
          e desenvolver soluções que possibilitem aos
          <br />
          nossos clientes obter melhores
          {' '}
          <SecContainer.OrangeColor>resultados</SecContainer.OrangeColor>
          {' '}
          em suas atividades
          <br />
          financeiras.&quot;
          <br />
          <br />
          Ao assumir a responsabilidade da parte tributária do trade, a nossa
          <br />
          empresa possibilita aos clientes focar seu tempo e energia no que
          <br />
          realmente importa:
          {' '}
          <SecContainer.OrangeColor>Os investimentos</SecContainer.OrangeColor>
          .
        </SecContainer.Text>
      </div>

      <SecContainer.ImageBg>
        <SecContainer.BlackBg />
      </SecContainer.ImageBg>
    </SecContainer>
  );
}

const SecContainer = styled.div`
  position:relative;
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});
  overflow: hidden;
`;

SecContainer.ImageBg = styled.div`
  background-image: url("/images/aboutus/Lion Laid.webp");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});
  transform: scale(1.1); 
  filter: blur(2px);
  -webkit-filter: blur(2px);
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

SecContainer.BlackBg = styled.div`
  background-color: rgba(0,0,0,0.65);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

SecContainer.FeaturedTitle = styled.div`
  text-align: center;
  padding-top: 7vh;
  max-width: 700px;
  margin: auto;

  p{
    text-align: center;
    color: #707070;
    font-size: 1.75rem;
    font-weight: 600;

    &:after{
      content: '';
      border-bottom: 2px solid #707070;
      width: 100px;
      display: block;
      height: 1px;
      margin: auto;
      margin-top: 15px;
    }
  }
`;

SecContainer.Title = styled.h3`

color: ${({ theme }) => theme.colors.lightMufasaOrange};
margin-bottom: 20px;
display: flex;
align-items: center;

&:before{
  content: '';
  border-left: 4px solid ${({ theme }) => theme.colors.mufasaOrange};
  width: 1px;
  display: block;
  height: 30px;
  margin-right: 20px;
}
`;
SecContainer.Text = styled.p`
  display: contents;
  color: #fff;
`;

SecContainer.OrangeColor = styled.strong`
  color: ${({ theme }) => theme.colors.lightMufasaOrange};
`;

export default OpenViewAboutUs;
