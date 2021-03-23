import styled from 'styled-components';

const OpenView = styled.div`
/*background-color: #C95206;
opacity: 0.85;*/
background-color: rgba(201, 82, 6, 0.85);
display: flex;
justify-content: space-between;
padding: 50px 5vw;
align-items: center;
flex-direction: column;

@media (min-width: 768px) {
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});
}

@media (min-width: 1024px){
  align-items: center;
  flex-direction: row;
}
`;

OpenView.SideText = styled.div`
text-align: left;
color: #fff;
grid-column: 1 / span 6;
font-size: 25px;
padding: 5vh 5vw;

h3{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 35px
}
p{
  font-weight: medium;
}

@media (min-width: 768px){
  width: 100%;
}

@media (min-width: 1024px){
  width: 50%;
}
`;

OpenView.SubmitButton = styled.button` 
  border: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #C95206;
  font-size: 17px;
  font-weight: semibold;
  transition: background 0.15s;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  color: #fff;

  &:hover{
    background: #a2450a;
  }

`;

OpenView.FormContainer = styled.div`
text-align: center;
font-size: 18px;
background: #fff;
border-radius: 5px;
box-shadow: #2b1304 0px 16px 24px;
min-width: 300px;
padding: 5vh 5vw;

@media (min-width: 768px){
  min-width: 450px;  
  padding: 40px;
}

@media (min-width: 1024px){
}

h4{
  color:#883906; 
  font-weight: bold;
  font-size: 30px;
}
h6{
  color: #707070;
  font-size: 15px;
}

`;

export default OpenView;
