import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonOpenMobile = styled.button`
  background: #fff;
  border: none;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;

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

function ButtonShowMenu({ onClick, showMobile }) {
  return (
    <ButtonOpenMobile onClick={onClick}>
      {
       showMobile ? (
         <i className="fas fa-times" />
       ) : (
         <i className="fas fa-bars" />
       )
     }
    </ButtonOpenMobile>
  );
}

ButtonShowMenu.propTypes = {
  onClick: PropTypes.func,
  showMobile: PropTypes.bool,
};

ButtonShowMenu.defaultProps = {
  showMobile: false,
  onClick: () => {},
};

export default ButtonShowMenu;
