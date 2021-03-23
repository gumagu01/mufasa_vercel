import React, { useContext, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { postData } from '../../assets/utils/fetchData';
import { ACTION } from '../../store/Actions';
import { DataContext } from '../../store/GlobalState';

export default function Google() {
  const [state, dispatch] = useContext(DataContext);
  let resposta;
  const { auth } = state;

  const responseGoogle = async (response) => {
    const userData = {
      email: response.profileObj.email,
    };
    console.log(userData);

    const res = await postData('api/auth/registerfacebook', userData);
    if (res.emailMessage) {
      console.log(res.emailMessage);
      resposta = res.emailMessage;
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
    //if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  if (resposta = 'Email já cadastrado') {
    return (
      <div>
        Você está registrado, vá para a pagina de Login
      </div>
    );
  } return (
    <div>
      <GoogleLogin
        clientId="563786372572-bbe6ifo4eslnm6710fh6b4ujog0qh0nb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
