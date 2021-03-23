import styled from 'styled-components';

const TaxRectangle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
width: 100%;
align-self: flex-start;

@media(min-width: 768px){
  width: 35%;
  min-width: 320px;
  max-width: 400px;
}

.d-flex-alig-justify-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.separate-line{
  background: ${({ theme }) => theme.colors.blueGradienteBg};
  height: 9px;
  width: 100%;
}

.blue-bg{
  background: ${({ theme }) => theme.colors.orangeMufasaGradient};               
}
`;

TaxRectangle.Title = styled.div`
background: ${({ theme }) => theme.colors.taxRectangleYellow};
background: ${({ theme }) => theme.colors.blueGradienteBg};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
padding: 20px 0;
font-size: 20px;
width: 100%;
font-weight: 400;

  span:first-child{
    font-size: 32px;
  }
`;

TaxRectangle.TaxBottomInfo = styled.div`
flex-direction: column;
display: flex;
justify-content: space-between;
align-items: center;

div{
  flex-direction: column !important;

  *{
    align-self: flex-start;
    padding: 0 !important;
  }

  h6{
    margin: 0;
    font-size: 1rem;
  }

  span{
    font-size: 0.8rem !important;
  }
}
`;

TaxRectangle.LineTax = styled.div`
margin-top: 50px;
flex-direction: column !important;
display: flex;
justify-content: center;
align-items: center;

div:nth-child(1){

  .first-line-tax{
    width: 80%;
    div{
      width:100%;
      justify-content: space-between;
      flex-direction: column;

      div{
        width:100%;
        justify-content: space-between;
        flex-direction: row;
      }

      div:nth-child(2){
        background: #c3c1c1;
        height: 9px;
      }
    }
  }
  .final-line-tax{
    width: 20%;
    height: 100%;
    align-items: baseline;
    div{
      background: #c3c1c1;
      height: 9px;
      width: 60%;
    }
  }

  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
}

div:nth-child(2){
  width: 100%;
  justify-content: center;
}
`;

TaxRectangle.Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 25px 20px;

  h5{
    font-size: 1.1rem;
  }

div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span{
    padding: 3px 0;
    font-size: 1rem;
  }
}
`;

export default TaxRectangle;
