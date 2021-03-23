import styled from 'styled-components';

const GraphContainer = styled.div`
min-height: calc(100vh 
- ${({ theme }) => theme.measuresPatterns.header.height.general}
- ${({ theme }) => theme.measuresPatterns.subNav.height.general}
- ${({ theme }) => theme.measuresPatterns.timeSelectBar.height.general}
);
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
background: ${({ theme }) => theme.colors.lightGrayBg};

@media(max-width: 767px){
  padding: 3vh 5vw !important; 
  flex-direction: column;
}
`;

GraphContainer.Bg = styled.div`
border-radius: 20px;
background: #fff;
width: 80vw;
height: 70vh;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;

@media(min-width: 1024px){
  width: 65vw;
}

`;

export default GraphContainer;
