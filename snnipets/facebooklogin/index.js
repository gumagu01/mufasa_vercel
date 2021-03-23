import React, { useContext, useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { postData } from '../../assets/utils/fetchData';
import { ACTION } from '../../store/Actions';
import { DataContext } from '../../store/GlobalState';

export default function Facebooke() {
  const componentClicked = () => {
    console.log('funcionou');
  };

  const [state, dispatch] = useContext(DataContext);
  const { auth, userData } = state;

  const responseFacebook = async (response) => {
    console.log(response);

    const useData = {
      email: response.email,
    };
    console.log(useData);

    const res = await postData('api/auth/login', useData);
    if (res.emailMessage) {
      return;
    }

    Cookie.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25,
    });
    localStorage.setItem('firstLogin', true);

    // set new auth
    const new_auth = await fetch('api/auth/accessToken', {
      method: 'GET',
    });
    const data = await new_auth.json();

    dispatch({
      type: ACTION.AUTH,
      payload: {
        token: data.accessToken,
        user: data.user,
      },
    });

    dispatch({

      type: ACTION.UPDATE_USER_DATA,
      payload: {
        email: response.email,
      },
    });
  };
  const router = useRouter();

  useEffect(() => {
    if ((Object.keys(auth).length !== 0) /*&& (Object.keys(auth) !== 'token: undefined, user: undefined')*/) router.push('/app/carteira/rentabilidade');
  }, [auth]);

  return (
    <FaceContainer>

      <FacebookLogin
        appId="2790121004649262"
        // autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        textButton="Continuar com o Facebook"
        cssClass="beauty-login-with"
        icon={<i className="fab fa-facebook" />}
      />
    </FaceContainer>
  );
}

const FaceContainer = styled.div`

  display: flex;
  border: 1px solid #707070;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  transition: all 0.3s;

  &:hover{
      background: rgba(0 0 0 / 10%);
      opacity: 1;
    }

    span{
      width: 100%;
    }

  i{
    margin-right: 10px;
    background: transparent;
    padding: 10px;
    border-radius: 2px;
    color: #3b5998;

    &:before{
      font-size: 22px;
    }
  }

  .beauty-login-with{
    button{
      width: 100%;
    }

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    color: #707070;
    border: none;
    background: transparent;
    font-family: inherit;
    padding-right: 10px;
    font-weight: 500;
    padding: 0;
    font-size: 15px;
    outline: none !important;

    &:hover{
      outline: none !important;
    }

    div{
      background: transparent !important;
    }
  }
`;
