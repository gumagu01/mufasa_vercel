import styled from 'styled-components';

const FormContainer = styled.div`
padding: 5vh 5vw;
max-width: 1160px;
width: 100%;

.newsletter{

  @media (max-width: 768px) {
    form{
      margin-bottom: 0 !important;
      margin-top: 10px !important;
    }    
  }

  @media (min-width: 769px) {
    form{
      width: 60%;
    }  
    h3{
      white-space: pre;
    }    
  }

  flex-direction: column;
  form{
    & > div:last-child{
      margin-top: 20px;
    }
  }
  
  & > div {
    width: 100%;
  }
  img{
    width:50%;
    align-self: center;
  }
  h3{

    justify-content: center;
    text-align: center;
  }
  a{
      transition: all 0.1s;
      color: ${({ theme }) => theme.colors.mufasaOrange};
      &:hover{        
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
    h3{
      text-align: left;
      justify-content: flex-start;
    } 
    img{
      align-self: flex-start;
    }
  }

}

.info-container{
  a{
      transition: all 0.1s;
      color: ${({ theme }) => theme.colors.mufasaOrange};
      &:hover{        
        text-decoration: underline;
      }
    }
  p{
    white-space: pre-line;
    text-align: left;
    margin-bottom: 30px;
    max-width: 100%;
    align-self: flex-start;
    span{
      word-break: break-all;
    }
  }
  h2,h4{
    margin-bottom: 30px;
  }
  div{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    h4{
      align-self: flex-start;
      text-align: left;
      max-width: 100%;
    }
  }
}
`;

FormContainer.LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    width: 100%;
  }

  p{
    text-align: left;
  }

  img{
    text-align: left;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 5px;
    align-self: flex-start;

    @media(max-width: 768px){
      display: flex;
      align-self: flex-start;
      width: 50%;
    }
  }
`;

FormContainer.Bg = styled.div`
background: #fff;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 5vh 5vw;

@media(min-width: 768px){
  padding: 5h 5vw;
}

border-radius: 10px;
overflow: hidden;
box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
`;

FormContainer.ImgContain = styled.div`
width: 33.5%;
will-change: transform;
transform: perspective(300px) rotateX(0deg) rotateY(0deg);
transition: all 0.2s;
display: none;

@media(min-width: 769px){
  display: initial;
}

img{
  width: 100%;
}

&:hover{
  transform: perspective(300px) rotate(20deg) scale(1.25);
}
`;

FormContainer.Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 769px){
    width: 44%;
  }

  @media(max-width: 768px){
    margin: 30px 0 !important;
  }

span{
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #333333;
  font-weight: 600;
}

`;

export default FormContainer;
