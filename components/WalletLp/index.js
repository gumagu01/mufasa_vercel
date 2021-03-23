import styled from 'styled-components';

const SectionContainer = styled.div`
min-height: calc(100vh - 80px);
background: #fff;
padding: 10vh 10vw;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

SectionContainer.SideText = styled.div`
text-align:left;
box-sizing: border-box;
-webkit-box-flex: 1;
max-width: 100%;
flex: 0 0 100%;
padding-right: 8px;
padding-left: 8px;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 767px) {
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  flex: 0 0 41.6666%;
  max-width: 41.6666%;
  margin-left: 8.3333%;
}

h3{
  color: ${({ theme }) => theme.colors.mufasaOrange};
  font-weight: 500;
  font-size: 3rem;
}

p{
  color: ${({ theme }) => theme.colors.fullBlack};
  max-width: 20rem;
  font-size: 1.5rem;
}
`;

SectionContainer.ImgContainer = styled.div`
box-sizing: border-box;
-webkit-box-flex: 1;
max-width: 100%;
flex: 0 0 100%;
padding-right: 0px;
padding-left: 0px;
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 768px) {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 16px;
  padding-left: 16px;
}

@media (min-width: 1024px) {
  flex: 0 0 45%;
  max-width: 45%%;
}

img{
  width: 100%;
}
`;

export default SectionContainer;
