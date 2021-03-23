import styled from 'styled-components';

const HeaderContainer = styled.header`
background-color: #fff;
position: fixed;
left: 0px;
right: 0px;
top: 0px;
z-index: 9;
will-change: transform;
font-weight: 500;
font-size: 1rem;

@media(max-width: 768px){
  .hide{
    display: none;
  }
}
`;

HeaderContainer.Nav = styled.nav`
display: flex;
-webkit-box-align: center;
align-items: center;
position: relative;
background-color: rgb(255, 255, 255);
height: ${({ theme }) => theme.measuresPatterns.header.height.general};
padding: 0px 1rem;
box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
will-change: transform;
transition: transform 0.2s ease 0s;
background-color: #fff;

@media (max-width: 768px){
  justify-content: space-between;
}

@media screen and (min-width: 1024px){
  height: ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
}
@media screen and (min-width: 769px){
  padding: 0px 2rem;
}
`;

HeaderContainer.LogoContainer = styled.div`
flex-grow: 0;
a{
  display: flex;
  
  img{
    width: 45px;
    height: 45px;
  }

  @media(max-width: 768px){
    img{
      width: 45px;
      height: 45px;
    }
  }
}
`;

HeaderContainer.NavOptions = styled.div`
margin-left: 20px;
flex-grow: 1;
overflow-x:auto;

  &::-webkit-scrollbar {
    display: none;
  }

@media (min-width: 768px){
  height: 100%;
}  

ul{
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: flex;
  position: relative;

  @media (min-width: 769px){
    height: 100%;
  }  

   ${'' /* li{
    @media (min-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
    }
  } */}

  ${'' /* a{
    text-decoration: none;
    color: #313131;

    @media (min-width: 768px){
      padding: 0px 20px;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
    }
  } */}

  .selected-nav-a{
    color: ${({ theme }) => theme.colors.mufasaOrange};
  }

  ${'' /* a.selected-nav-a:hover{
    color: #c95206;
  }

  a:hover{
    color: #fda46b;
  } */}
}
`;

HeaderContainer.NavOptions.ItemBg = styled.div`
position: absolute;
top: 0;
height: 5px;
background: ${({ theme }) => theme.colors.mufasaOrange};
pointer-events: none;
transition: all 0.35s;
`;

HeaderContainer.ButtonOpenMobile = styled.button`
  background: #fff;
  border: none;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;

  @media(min-width: 768px){
    display: none;
  }

  &:focus{
    background-color: ${({ theme }) => theme.colors.verySoftMufasaOrange};
    outline: none;
  }

  &:active{
    background-color: #f5b18a;
    outline: none;
  }

  i{
    color: rgb(17,17,17);
  }
`;

HeaderContainer.ContainerMobileLinks = styled.div`
  border-top: 1px solid rgba(112, 112, 112, 0.314);
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow-x: auto;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0px;
  right: 0px;
  top: ${({ theme }) => theme.measuresPatterns.header.height.general};
  height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});
  padding: 32px;
  display: flex;
  flex-direction: column;
  transform: translateY(-100vh);
  transition: transform 0.2s ease-out 0s;
  will-change: transform;
`;

export default HeaderContainer;
