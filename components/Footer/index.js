import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0e0e0e;
  /*-webkit-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});
  -ms-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});
  transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});*/
  will-change: transform;
  text-align: center;
  display: grid;
  grid-gap: 50px 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  padding: 5vh 5vw;
  font-size: 0.8125rem;
  line-height: 1rem;
  transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 5vh 10vw;
  }
  
  @media screen and (min-width: 1024px){
    /*-webkit-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
    -ms-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
    transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});*/

    -webkit-box-align: center;
    align-items: center;
    grid-gap: 24px 50px;
    row-gap: 0px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    padding: 10vh 5vw 5vh 5vw;
  }

  h4{
    font-weight: bold;
    color: #fff;
    font-size: 16px;
  }
  p{
    color: #B4B4B4;
    font-weight: regular;
    font-size: 14px;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

FooterContainer.FootColumn = styled.div`
  place-self: flex-start;
  text-align: left;
  margin-top: 0;
  
  @media screen and (min-width: 768px) {
    margin-left: 10vw;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
`;

FooterContainer.FootColumn.Title = styled.div`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.mufasaOrange};
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.25rem;

  @media(max-width: 768px){
    font-size: 1.2rem;
  }
`;

FooterContainer.Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 4;
  margin-top: 30px;

  @media(max-width: 1023px){
    grid-column: 1 / span 2;
  }

  small{
    color: #8E8E8E;
    a{
      color: #8E8E8E;
      transition: all 0.1s;
      &:hover{
        color: ${({ theme }) => theme.colors.mufasaOrange};
        text-decoration: underline;
      }
    }
  }

  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default FooterContainer;
