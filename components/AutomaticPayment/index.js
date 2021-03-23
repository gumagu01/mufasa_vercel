import styled from 'styled-components';

const SectionContainer = styled.div`
min-height: calc(100vh - 80px);
max-height: calc(100vh - 80px);
overflow: hidden;
position: relative;
`;

SectionContainer.BgImage = styled.div`
background-size: cover;
background-repeat: no-repeat;
background-position: top;
background-image: url('/images/landingPage/OrangeShirtDudeED.webp');
min-height: calc(100vh - 80px);
max-height: calc(100vh - 80px);
display: flex;
/*transform: scale(1.1); 
filter: blur(2px);
-webkit-filter: blur(2px);*/
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: -1;
`;

SectionContainer.Bg = styled.div`
background-color: rgba(0 0 0 / 40%);
width: 100%;
`;

SectionContainer.Text = styled.div`
text-align:left;
box-sizing: border-box;
-webkit-box-flex: 1;
max-width: 100%;
flex: 0 0 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10vh 0 0 10vw;
height: 100%;

@media (min-width: 1024px) {
}

h3{
  color: #E49447;
  font-weight: 500;
  font-size: 3rem;
}

p{
  color: #fff;
  max-width: 20rem;
  font-size: 1.5rem;
}
`;

export default SectionContainer;
