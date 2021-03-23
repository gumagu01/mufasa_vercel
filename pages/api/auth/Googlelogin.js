import React, { useContext, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { DataContext } from '../../../store/GlobalState';
import { postData } from '../../../assets/utils/fetchData';
import { ACTION } from '../../../store/Actions';

export default function GoogleLog() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const responseGoogle = async (response) => {
    const userData = {
      email: response.profileObj.email,
    };
    console.log(response);

    const res = await postData('api/auth/login', userData);
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
        email: response.profileObj.email,
        password: 'logado com o google',
      },
    });
  };
  const router = useRouter();

  useEffect(() => {
    // if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  return (
    <GoogleContainer>
      <GoogleLogin
        className="beauty-login-with"
        clientId="563786372572-bbe6ifo4eslnm6710fh6b4ujog0qh0nb.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </GoogleContainer>
  );
}

const GoogleContainer = styled.div`
  .beauty-login-with{
    color: #707070 !important;
    border: 1px solid #707070 !important;
    border-radius: 4px !important;
    overflow: hidden !important;
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    box-shadow: none !important;
    margin: 17px 0 !important;
    position: relative !important;
    top: 0 !important;
    transition: all 0.3s !important;
    font-family: inherit !important;
    font-size: 15px !important;
    &:hover{
      background: rgba(0 0 0 / 10%) !important;
      opacity: 1 !important;
    }
    div{
      background: transparent !important;
    }
  }
`;
