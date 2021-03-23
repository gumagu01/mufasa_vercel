import styled from 'styled-components';

const SubHeaderContainer = styled.div`
  background: ${({ theme }) => theme.measuresPatterns.subNav.background};
  position: fixed;
  left: 0px;
  right: 0px;
  top: ${({ theme }) => theme.measuresPatterns.header.height.general};
  z-index: 5;
  will-change: transform;
  font-weight: 500;
  font-size: 1rem;
  height: calc(${({ theme }) => theme.measuresPatterns.subNav.height.general}
  + ${({ theme }) => theme.measuresPatterns.timeSelectBar.height.general}
  );
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
  transition: all 0.4s;
  display:flex;
  justify-content:center;
  align-items: center;

  @media screen and (min-width: 1024px){
    top:  ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
  }

  .no-hover{
    opacity: 0.5;

    &:hover{
      background: transparent;
      box-shadow: none;
      transform: scale(1);
      z-index: 2;
    }
  }

  .hide-arrow{
    opacity: 0;
    pointer-events: none;

    &:hover{
      background: transparent;
      box-shadow: none;
      transform: scale(1);
      z-index: 2;
    }
  }
 
`;

SubHeaderContainer.UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
    position: relative;
    transition: all 0.4s;
    position: absolute;
    top: 0;
    scroll-behavior: smooth;
    
    @media(max-width: 
   ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2 - 1}px){
    right: -0px !important;
    position: relative;
    overflow-x: auto;  

    li:first-child{
      padding-left: 12px;
    }

    li:last-child{
      padding-right: 12px;
    }
   }

    &::-webkit-scrollbar {
      display: none;
    }
`;

SubHeaderContainer.UlContain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  justify-content: flex-end;
  width: 100%;

   @media(min-width: 
   ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      max-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6}px;
   }

   @media(min-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 8 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      max-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 8}px;
   }

   @media(min-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 10 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      max-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 10}px;
   }

   @media(min-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 12 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      max-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 12}px;
   }

  &::-webkit-scrollbar {
    display: none;
  }
`;

SubHeaderContainer.UlContain.FadeIn = styled.div`

  height: 100%;
  margin-right: 0;
  position: relative;
  display: none; 

   @media(max-width: 
   ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      
      display: block;

      &:before{
        content: '';
        position: absolute;
        top: 0px;
        left: -3px;
        width: 18px;
        height: 100%;
        z-index:10;
        background: linear-gradient(90deg, rgba(201,82,6,1) 40%, rgba(255,255,255,0) 100%);
      }
   }
`;

SubHeaderContainer.UlContain.FadeOut = styled.div`

  height: 100%;
  margin-right: 0;
  position: relative;
  display: none; 

   @media(max-width: 
   ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      
      display: block;

      &:before{
        content: '';
        position: absolute;
        top: 0px;
        right: -3px;
        width: 18px;
        height: 100%;
        z-index:10;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(220,139,86,1) 60%);
      }
   }
`;

SubHeaderContainer.ItemBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  margin: 3px 0;
  border-radius: 3px;
  pointer-events: none;
  transition: all ease-out 0.2s;
  opacity: 0.25;
  display: none;
`;

SubHeaderContainer.ArrowContain = styled.button`
   min-width: ${({ theme }) => theme.measuresPatterns.taxTimeBar.buttonSideWidth};
   display:flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   border: none;
   background: transparent;
   transform: scale(1);
   transition: all 0.2s;

   @media(max-width: 
   ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 6 + parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.toString().replace('px', '')) * 2}px){
      display: none;  
    }

   i{
     color: #fff;
     font-size: 23px;
   }

   &:hover{
     /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
    background: ${({ theme }) => theme.measuresPatterns.subNav.background};
    /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
    box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
    box-shadow: #2b1304 0px 3px 5px;
    transform: scale(1.1);
    z-index: 2;
   }
`;

export default SubHeaderContainer;
