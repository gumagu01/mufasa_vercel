import React, { useState, useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import { ACTION } from '../../store/Actions';
import Loading from '../../snnipets/Loading';
import validLogin from '../../assets/utils/ValidateData/ValidLogin';
import { getData, postData } from '../../assets/utils/fetchData';

function Login() {
  const [state, dispatch] = useContext(DataContext);
  const { loading } = state;
  const { userData } = state;
  const { auth } = state;

  const [submitStatus, setSubmitStatus] = useState({
    emailMessage: '',
    passwordMessage: '',
  });

  const { email, password } = userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION.UPDATE_USER_DATA,
      payload: { [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailMessage, passwordMessage } = validLogin(userData.email, userData.password);

    setSubmitStatus({
      emailMessage,
      passwordMessage,
    });

    if (emailMessage || passwordMessage) {
      return;
    }

    dispatch({ type: ACTION.START_LOADING });
    const res = await postData('api/bend-admin/login', userData);
    dispatch({ type: ACTION.END_LOADING });

    setSubmitStatus({
      emailMessage: res.emailMessage,
      passwordMessage: res.passwordMessage,
    });

    if (res.emailMessage || res.passwordMessage) {
      return;
    }

    if (res.err) {
      return;
    }

    Cookie.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25,
    });
    localStorage.setItem('firstLogin', true);

    // set new auth
    const new_auth = await getData('api/auth/accessToken');

    dispatch({
      type: ACTION.AUTH,
      payload: {
        token: new_auth.accessToken,
        user: new_auth.user,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: ACTION.UPDATE_USER_DATA,
      payload: {
        email: '',
        password: '',
      },
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length !== 0 && auth.user.admin) {
      router.push('/bend-admin/home');
    } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    }
  }, [auth]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
          <div id="emailHelp" className={`form-text${submitStatus.emailMessage || submitStatus.emailNotExist ? ' text-danger' : ''}`}>
            {
                            submitStatus.emailMessage
                              ? (
                                <p>{submitStatus.emailMessage}</p>
                              )
                              : (
                                ''
                              )
                        }
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
          <div id="passwordHelp" className={`form-text${submitStatus.passwordMessage || submitStatus.wrongPassword ? ' text-danger' : ''}`}>
            {
                            submitStatus.passwordMessage
                              ? (
                                <p>{submitStatus.passwordMessage}</p>
                              )
                              : (
                                ''
                              )
                        }
          </div>
        </div>
        {/*
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkMeOut" />
                    <label className="form-check-label" htmlFor="checkMeOut">Lembrar de mim</label>
                </div>
                */}
        <button type="submit" className="btn btn-primary d-flex mx-auto">
          {
                        loading
                          ? (
                            <>
                              <Loading />
                            </>
                          ) : (
                            'ENTRAR'
                          )
                    }
        </button>
      </form>

    </>
  );
}

export default Login;
