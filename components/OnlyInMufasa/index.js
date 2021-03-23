import styled from 'styled-components'


const OnlyMufasaContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  padding: 10vh 8vw;
  color: #707070;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px){
    padding: 10vh 8vw;
  }

  h1{
    margin-bottom: 75px;
    font-weight: 500;
  }
`;

OnlyMufasaContainer.Content = styled.div`
  /*background-color: #C95206;
  opacity: 0.85;*/

  display: grid;
  justify-items: stretch;
  gap: 24px 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;

  @media (min-width: 768px) {
    gap: 48px 32px;
    
  }

  @media (min-width: 1024px){
    -webkit-box-align: center;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }
`;

export default OnlyMufasaContainer