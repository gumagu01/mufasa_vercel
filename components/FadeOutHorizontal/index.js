import styled from 'styled-components';

const FadeOut = styled.div`
  height: 100%;
  margin-left: 16px;
  position: relative;
  display: none; 

  @media (min-width: 768px){
    display: block;
  }

  &:before{
    content: "";
    position: absolute;
    top: 0px;
    right: 100%;
    height: calc(100% - 1rem);
    box-shadow: rgb(255 255 255) -1rem 0px 0.625rem 0.5rem;
  }
`;

export default FadeOut;
