import React from 'react';
import styled from 'styled-components';
import ServiceProductItem from '../../../snnipets/AboutUs/Products';
import { freeServices, paidServices } from '../../../constants';

function Products() {
  return (
    <Container
      id="produtos"
    >
      <Container.Service>
        <h3>
          Serviços Gratuitos
        </h3>
        <Container.FreeService>
          {
              freeServices.map((service, index) => {
                const serviceId = `freeService__${index}`;
                return (
                  <ServiceProductItem
                    key={serviceId}
                    item={service}
                  />
                );
              })
            }
        </Container.FreeService>
      </Container.Service>

      <Container.Service
        style={{
          marginTop: '50px',
        }}
      >
        <h3>
          Serviços Premium
        </h3>
        <Container.FreeService>
          {
            paidServices.map((service, index) => {
              const serviceId = `paidService__${index}`;
              return (
                <ServiceProductItem
                  key={serviceId}
                  item={service}
                />
              );
            })
            }
        </Container.FreeService>
      </Container.Service>

    </Container>
  );
}

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.softPurpleBg};
min-height: calc(100vh - 80px);
padding-top: ${({ theme }) => theme.measuresPatterns.header.height.general};
padding-bottom: 10vh;

@media(min-width: 1024px){
  padding-top: ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
}
`;

Container.FreeService = styled.div`
/*display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 16px 24px;
grid-template-rows: auto;*/
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0 8vw;
width: 100%;

@media(min-width: 768px){
}

@media(min-width: 1024px){
  padding: 0 5vw;
}
`;

Container.Service = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
/*min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});

@media(min-width: 1024px){
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
}*/

h3{
  margin-bottom: 20px;
  margin-top: 20px;
}
`;

export default Products;
