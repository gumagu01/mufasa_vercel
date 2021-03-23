import React, { useState } from 'react';
import styled from 'styled-components';
import SmoothFocusBack from '../../SmoothFocusBack';
import UserOptionsBox from '../UserOptionsBox';

const ButtonOpenMobile = styled.button`
  background: #fff;
  border: none;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  position: relative;

  .user-options{
    opacity: 1;
    transform: translateY(0);
    pointer-events: initial;
  }

  .show-focus-overlay{
    opacity: .2;
  }

  @media(min-width: 769px){
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
    font-size: 1.25rem;
  }
`;

function ButtonShowProfileOptions() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <ButtonOpenMobile onClick={handleClick}>
      <i className="fas fa-user" />
      <UserOptionsBox className={showMenu ? 'user-options' : ''} />
      <SmoothFocusBack
        className={showMenu ? 'show-focus-overlay' : ''}
        show={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      />
    </ButtonOpenMobile>
  );
}

export default ButtonShowProfileOptions;
