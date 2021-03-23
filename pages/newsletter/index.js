import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import validateEmail from '../../assets/utils/ValidateData/validateEmail';
import SupportContainer from '../../components/SupportContainer';
import FormContainer from '../../components/SupportForm';
import SectionTitle from '../../snnipets/SectionTitle';
import InputContainer from '../../snnipets/SupportForm/InputContainer';
import SubmitButton from '../../snnipets/SupportForm/SubmitButton';
import SecContainer from '../../components/AboutUs/OpenView';
import Checkbox from '../../snnipets/Checkbox';

function Newsletter() {
  const [userData, setUserData] = useState({});
  const [validEmail, setValidEmail] = useState(false);
  const [sendClick, setSendClick] = useState(0);
  const [checkbox, setCheckbox] = useState(false);

  const handleCheck = () => {
    setCheckbox(!checkbox);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDataToSend = { ...userData, receiveEmailInfo: checkbox };

    setSendClick((previous) => (previous + 1));

    if (!userData.name
      || !validEmail) {
      console.log('error on submit');
      return;
    }

    console.log('handleSubmit');
    console.log(userDataToSend);
  };

  useEffect(() => {
    setCheckbox(checkbox);

    if (userData.email && validateEmail(userData.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [userData]);
  return (
    <SupportContainer className="translate-header">
      <SectionTitle>
        Newsletter
      </SectionTitle>
      <FormContainer>
        <FormContainer.Bg className="newsletter">
          <FormContainer.LeftSide>
            <h3 style={{
              color: '#000', fontSize: '22px', marginBottom: '15px',
            }}
            >
              Receba todas as novidades por e-mail!
            </h3>
            <SecContainer.Title style={{ color: '#8E8E8E' }}>
              Faça parte da nossa Comunidade!
            </SecContainer.Title>
            <img src="/images/newsletter/ComunidadeSlim.webp" alt="Newsletter" />
          </FormContainer.LeftSide>
          <FormContainer.Form
            onSubmit={handleSubmit}
            style={{ marginTop: '20px' }}
          >
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
            <Checkbox onChange={handleCheck} style={{ marginTop: '-10px' }}>
              Eu concordo em receber comunicações.
            </Checkbox>

            <small>
              {'Ao informar meus dados, eu concordo com as '}
              <Link href="/politicas-de-privacidade">
                <a>
                  Políticas de Privacidade
                </a>
              </Link>

              {' e com os '}
              <Link href="/termos-de-uso">
                <a>
                  Termos de Uso.
                </a>
              </Link>
            </small>
            <SubmitButton arrowIcon>
              Cadastrar
            </SubmitButton>
          </FormContainer.Form>
        </FormContainer.Bg>
      </FormContainer>
    </SupportContainer>
  );
}

export default Newsletter;
