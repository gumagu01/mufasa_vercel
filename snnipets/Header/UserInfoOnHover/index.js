import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import SmoothFocusBack from '../../SmoothFocusBack';
import UserOptionsBox from '../UserOptionsBox';
import { DataContext } from '../../../store/GlobalState';

const Container = styled.div`
  color: #C95206;
  display: flex;
  justifyContent: center;
  alignItems: center;
  cursor: pointer;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: rgb(255 255 255 / 100%);
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.2s;

  @media(max-width: 768px){
    display: none;
  }

  &:hover{
    background-color: rgb(255 99 0 / 10%);
  }

  .user-options{
    opacity: 1;
    transform: translateY(0);
    pointer-events: initial;
  }

  .show-focus-overlay{
    opacity: .2;
  }
`;

function UserInfoOnHover() {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  const email = auth.user ? auth.user.email : '';
  const role = auth.user ? auth.user.role : '';
  return (
    <Container onClick={() => setShow(!show)}>
      <span>
        {email}
      </span>
      <i className="fas fa-caret-down" style={{ marginLeft: '11px', fontSize: '20px' }} />
      <UserOptionsBox className={show ? 'user-options' : ''} />
      <SmoothFocusBack
        className={show ? 'show-focus-overlay' : ''}
        show={show}
        onClick={() => setShow(!show)}
      />
    </Container>
  );
}

export default UserInfoOnHover;
