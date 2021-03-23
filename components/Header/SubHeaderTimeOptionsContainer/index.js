import styled from 'styled-components';

const SubHeaderTimeOptionsContainer = styled.div`

  background: ${({ theme }) => theme.measuresPatterns.timeSelectBar.background};
  position: fixed;
  left: 0px;
  right: 0px;
  top: calc(${({ theme }) => theme.measuresPatterns.header.height.general}
  + ${({ theme }) => theme.measuresPatterns.subNav.height.general});
  z-index: 4;
  will-change: transform;
  font-weight: 500;
  font-size: 0.8rem;
  height: ${({ theme }) => theme.measuresPatterns.timeSelectBar.height.general};
  border-bottom: ${({ theme }) => theme.measuresPatterns.timeSelectBar.border.bottom} solid #333;
  transition: all 0.4s;
  tranform: translateY(0);

  @media screen and (min-width: 1024px){
    top: calc(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024}
  + ${({ theme }) => theme.measuresPatterns.subNav.height.general});
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-x: auto;
    position: relative;

    &::-webkit-scrollbar {
     display: none;
    }
  }
`;

SubHeaderTimeOptionsContainer.ItemBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  margin: 3px 0;
  border-radius: 3px;
  pointer-events: none;
  transition: all ease-out 0.2s;
  opacity: 0.25;
`;

export default SubHeaderTimeOptionsContainer;
