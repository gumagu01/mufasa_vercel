import styled from 'styled-components';

const SectionContainer = styled.div`
min-height: calc(100vh - 80px);
background: ${({ theme }) => theme.colors.lightGrayBg};;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
`;

SectionContainer.SideText = styled.div`
text-align:left;
box-sizing: border-box;
-webkit-box-flex: 1;
max-width: 100%;
flex: 0 0 100%;
padding: 10vh 0 0 10vw;
display: flex;
flex-direction: column;
justify-content: center;
flex-grow: 0;

@media (max-width: 767px) {
  padding: 10vh 10vw;
}

@media (min-width: 768px) {
  flex: 0 0 41.6666%;
  max-width: 41.6666%;
  margin-left: 8.3333%;
  padding: 10vh 0 10vh 10vw;
}

@media (min-width: 1024px) {
  flex: 0 0 41.6666%;
  max-width: 41.6666%;
  margin-left: 8.3333%;
  padding: 10vh 0 10vh 10vw;
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
justify-content: flex-end;
flex-grow: 1;

@media (min-width: 768px) {
  flex: 0 0 50%;
  max-width: 50%;
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
