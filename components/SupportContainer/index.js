import styled from 'styled-components';

const SupportContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background: ${({ theme }) => theme.colors.lightGrayBg};

h3{
  text-align: left;
  font-size: 20px;
  margin: 0;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.mufasaOrange};
}

`;

SupportContainer.QuestionContain = styled.div`
  padding: 10vh 5vw;
  max-width: 1160px;
  width: 100%;
`;

export default SupportContainer;
