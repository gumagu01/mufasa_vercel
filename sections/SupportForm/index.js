import React, { useState, useEffect } from 'react';
import InputContainer from '../../snnipets/SupportForm/InputContainer';
import FormContainer from '../../components/SupportForm';
import SubmitButton from '../../snnipets/SupportForm/SubmitButton';
import validateEmail from '../../assets/utils/ValidateData/validateEmail';

function SupportForm() {
  const [userData, setUserData] = useState({});
  const [validEmail, setValidEmail] = useState(false);
  const [sendClick, setSendClick] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendClick((previous) => (previous + 1));

    if (!userData.name
      || !validEmail
      || !userData.subject
      || !userData.message) {
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
    <FormContainer>
      <FormContainer.Bg>
        <FormContainer.ImgContain>
          <img src="/images/icons/mailNEWtrans.webp" alt="E-mail" />
        </FormContainer.ImgContain>
        <FormContainer.Form
          onSubmit={handleSubmit}
        >
          <span>
            Entre em contato
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
          <InputContainer
            inputType="text"
            inputName="subject"
            inputPlaceholder="Assunto"
            userData={userData}
            setUserData={setUserData}
            dataValidate="Assunto é necessário"
            valid={userData.subject}
            sendClick={sendClick}
          />
          <InputContainer
            inputName="message"
            inputPlaceholder="Mensagem"
            userData={userData}
            setUserData={setUserData}
            dataValidate="Mensagem é necessária"
            valid={userData.message}
            sendClick={sendClick}
          />
          <SubmitButton arrowIcon>
            Enviar
          </SubmitButton>
        </FormContainer.Form>
      </FormContainer.Bg>
    </FormContainer>
  );
}

export default SupportForm;
