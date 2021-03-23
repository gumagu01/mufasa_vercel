import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import Link from 'next/link';
import UserTitle from './UserTitle';
import { DataContext } from '../../../store/GlobalState';
import { ACTION } from '../../../store/Actions';

function UserOptionsBox({ className }) {
  const [state, dispatch] = useContext(DataContext);

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: '/api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: ACTION.AUTH,
      payload: {},
    });
  };
  return (
    <OptionsBox className={className}>
      <UserTitle href="/app/conta">
        Conta
      </UserTitle>
      <UserTitle href="/app/dados-cei">
        Sincronizar dados do CEI
      </UserTitle>
      <a onClick={handleLogout}>
        <UserTitle noBorder href="/">
          Sair

          <i
            className="fas fa-sign-out-alt"
            style={{
              marginLeft: '10px',
            }}
          />
        </UserTitle>
      </a>
    </OptionsBox>
  );
}

const OptionsBox = styled.div`
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  top: calc(50% + 0.5rem + 10px);
  left: -30px;
  background: #fff;
  right: 0;
  transform: translateY(-20px);
  border: 1px solid #70707050;
  box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
  pointer-events: none;
  z-index: 101;

  &:before{
    position: absolute;
    top: -6px;
    right: 17px;
    content: "";
    border-bottom: 6px solid #FFF;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }

  @media(max-width: 768px){
    width: 90vw;
    top: calc(50% + 0.5rem + 10px);
    right: 0;
    left: auto;

    &:before{
      position: absolute;
      top: -6px;
      right: 17px;
      content: "";
      border-bottom: 6px solid #FFF;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
`;

export default UserOptionsBox;
