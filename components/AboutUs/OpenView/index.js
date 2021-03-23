import styled from 'styled-components';

const SecContainer = styled.div`
  position:relative;
  min-height: calc(100vh - 80px);
  overflow: hidden;
`;

SecContainer.ImageBg = styled.div`
  background-image: url("/images/aboutus/Lion Laid.webp");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 80px);
  transform: scale(1.1); 
  filter: blur(2px);
  -webkit-filter: blur(2px);
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

SecContainer.BlackBg = styled.div`
  background-color: rgba(0,0,0,0.65);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

SecContainer.FeaturedTitle = styled.div`
  text-align: center;
  padding-top: 10vh;
  max-width: 700px;
  margin: auto;

  p{
    text-align: center;
    color: #707070;
    font-size: 1.75rem;
    font-weight: 600;

    &:after{
      content: '';
      border-bottom: 2px solid #707070;
      width: 100px;
      display: block;
      height: 1px;
      margin: auto;
      margin-top: 15px;
    }
  }
`;

SecContainer.Title = styled.h3`

color: ${({ theme }) => theme.colors.lightMufasaOrange};
margin-bottom: 20px;
display: flex;
align-items: center;

@media (min-width: 768px) {
    white-space: pre;   
  }

&:before{
  content: '';
  border-left: 4px solid ${({ theme }) => theme.colors.mufasaOrange};
  width: 1px;
  display: block;
  height: 30px;
  margin-right: 20px;
}
`;
SecContainer.Text = styled.p`
  display: contents;
  color: #fff;
`;

SecContainer.OrangeColor = styled.strong`
  color: ${({ theme }) => theme.colors.lightMufasaOrange};
`;

export default SecContainer;
