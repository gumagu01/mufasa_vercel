import React, { useState } from 'react';
import SecContainer from '../../components/AboutUs/OpenView';
import FormContainer from '../../components/SupportForm';
import ListNav from '../../snnipets/Footer/ListNav';
import InputContainer from '../../snnipets/SupportForm/InputContainer';
import SubmitButton from '../../snnipets/SupportForm/SubmitButton';

function UnderDevelopment() {
  const [userData, setUserData] = useState({});
  const [sendClick, setSendClick] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendClick((previous) => (previous + 1));

    if (!userData.subject
      || !userData.message) {
      console.log('error on submit');
      return;
    }

    console.log('handleSubmit');
    console.log(userData);
  };
  return (
    <FormContainer style={{ padding: '0' }}>
      <FormContainer.Bg style={{ height: 'initial' }}>
        <FormContainer.LeftSide>
          <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'start', color: '#8E8E8E' }}>
            Em desenvolvimento!
          </SecContainer.Title>
          <img src="/images/underConstruction/UnderConstruction.webp" alt="Em desenvolvimento" />
          <p style={{ whiteSpace: 'pre-line' }}>
            {`Opa! A funcionalidade que você tentou acessar está sendo desenvolvida pela nossa equipe!

Não se preocupe, em breve todos os recursos estarão disponíveis.`}
          </p>

          <ul>
            <ListNav
              text="Deseja ser notificado a respeito de novidades?"
              href="/newsletter"
              color="#C95206"
              iconClassName="fas fa-caret-right"
              fontSize="1rem"
            />
          </ul>
        </FormContainer.LeftSide>
        <FormContainer.Form
          onSubmit={handleSubmit}
          style={{
            marginBottom: '10vh',
            marginRight: '3vw',
          }}
        >
          <span>
            Gostaria de deixar um Feedback?
          </span>
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

export default UnderDevelopment;
