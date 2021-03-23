import React, { useState, useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import validRegister from '../../assets/utils/ValidateData/ValidRegister';
import { postData } from '../../assets/utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import InputField from '../../snnipets/InputField';
import validLogin from '../../assets/utils/ValidateData/ValidLogin';
import { ACTION } from '../../store/Actions';

function FormLogin({
  children, isRegister, autofocus,
}) {
  const [state, dispatch] = useContext(DataContext);
  const { userData, auth } = state;

  const [submitStatus, setSubmitStatus] = useState({
    emailMessage: '',
    passwordMessage: '',
    emailAlreadyExist: '',
  });

  const { email, password } = userData;

  const handleOnBlurChange = (e) => {
    const { name, value } = e.target;

    const validEmail = name === 'email' ? value : userData.email;
    const validPassword = name === 'password' ? value : userData.password;

    const validResponse = validRegister(
      validEmail,
      validPassword,
      name,
    );

    setSubmitStatus({
      ...submitStatus,
      ...validResponse,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: { [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!isRegister) {
    // router.push('/app/carteira/rentabilidade?periodo=no-mes');
    // return;
    // }

    const { emailMessage, passwordMessage } = validRegister(userData.email, userData.password, 'form');

    setSubmitStatus({
      emailMessage,
      passwordMessage,
    });

    if (emailMessage || passwordMessage) {
      return;
    }
    console.log(userData);
    dispatch({ type: 'START_LOADING' });

    let res = await postData('api/auth/login', userData);

    if (res.emailMessage === 'Esse email não está cadastrado') {
      res = await postData('api/auth/register', userData);
      // diz pro cara que ele acabou de se registrar
    }
    if (res.emailMessage === 'Senha incorreta') {
      // diz pro cara que senha ta errada
      return;
    }
    dispatch({ type: 'END_LOADING' });

    setSubmitStatus({
      emailAlreadyExist: res.emailMessage,
    });

    if (res.emailMessage) return;

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
    if ((data.accessToken) && (data.user)) {
      dispatch({
        type: 'AUTH',
        payload: {
          token: data.accessToken,
          user: data.user,
        },
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: {
        email: '',
        password: '',
      },
    });
  }, []);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    setSubmitStatus({
      emailMessage: '',
      passwordMessage: '',
      emailAlreadyExist: '',
    });
  }, [query]);

  useEffect(() => {
  // if (Object.keys(auth).length !== 0) router.push('/inicio');
  }, [auth]);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        marginTop: '40px',
      }}
    >
      <InputField
        autofocus={autofocus}
        submitMessage={submitStatus.emailMessage}
        userDataInfo={userData.email}
        onChange={handleInputChange}
        onBlur={handleOnBlurChange}
        initialMessage="E-mail principal"
        type="email"
        value={userData.email}
        idAndName={`email_isRegister_${isRegister}`}
      />
      <InputField
        submitMessage={submitStatus.passwordMessage}
        userDataInfo={userData.password}
        onChange={handleInputChange}
        onBlur={handleOnBlurChange}
        initialMessage="Senha"
        type="password"
        value={userData.password}
        idAndName={`password_isRegister_${isRegister}`}
      />
      {children}
    </form>
  );
}

FormLogin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  isRegister: PropTypes.bool,
  autofocus: PropTypes.bool,
};

FormLogin.defaultProps = {
  autofocus: false,
  isRegister: false,
};

export default FormLogin;
