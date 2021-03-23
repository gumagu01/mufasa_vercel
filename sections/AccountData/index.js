import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import validateEmail from '../../assets/utils/ValidateData/validateEmail';
import AccountDataContain from '../../components/AccountData';
import FormContainer from '../../components/SupportForm';
import { BottomText } from '../../pages/login';
import ListNav from '../../snnipets/Footer/ListNav';
import SecurityEnvironment from '../../snnipets/SecurityEnvironment';
import InputContainer from '../../snnipets/SupportForm/InputContainer';
import SubmitButton from '../../snnipets/SupportForm/SubmitButton';

function AccountData() {
  const [userData, setUserData] = useState({});
  const [validEmail, setValidEmail] = useState(false);
  const [sendClick, setSendClick] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendClick((previous) => (previous + 1));

    if (!userData.name
      || !validEmail
      || !userData.password) {
      console.log('error on submit');
      return;
    }

    console.log('handleSubmit');
    console.log(userData);
  };

  useEffect(() => {
    if (userData.email && validateEmail(userData.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [userData]);
  return (
    <AccountDataContain>
      <AccountDataContain.Bg>
        <div>
          <img src="/images/profile/CoolLion.webp" alt="Leão" style={{ height: '100%' }} />
        </div>

        <div>
          <div className="user-bg">
            <div className="camera-icon">
              <i className="fas fa-camera-retro" />
            </div>
            <div className="user-icon">
              <i className="fas fa-user" />
            </div>
            <div className="upload-photo-contain">
              <div className="upload-photo-box">
                Escolher foto
              </div>
            </div>
          </div>
          <FormContainer.Form
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
          >
            <span>
              Dados cadastrais
            </span>
            <InputContainer
              inputType="text"
              inputName="name"
              inputPlaceholder="Nome"
              userData={userData}
              setUserData={setUserData}
              dataValidate="Nome é necessário"
              valid={userData.name}
              sendClick={sendClick}
            />
            <InputContainer
              inputType="text"
              inputName="email"
              inputPlaceholder="E-mail"
              userData={userData}
              setUserData={setUserData}
              dataValidate="E-mail válido é necessário: ex@abc.xyz"
              valid={validEmail}
              sendClick={sendClick}
            />
            <SubmitButton arrowIcon>
              Atualizar
            </SubmitButton>
            <p style={{ color: '#707070', margin: '10px 0 0 0' }}>OU</p>
            {/* <ul>
              <ListNav
                text="Alterar senha"
                href="/alterar-senha"
                color="#C95206"
                iconClassName="fas fa-caret-right"
                fontSize="1.25rem"
              />
            </ul> */}
            <BottomText style={{ margin: '10px 0 0 0' }}>
              <Link href="/app/alterar-senha">
                <a>
                  Alterar senha
                  <i
                    className="fas fa-chevron-right"
                  />
                </a>
              </Link>
            </BottomText>
            <SecurityEnvironment style={{ marginTop: '10px' }} />
          </FormContainer.Form>
        </div>
      </AccountDataContain.Bg>
    </AccountDataContain>
  );
}

export default AccountData;
