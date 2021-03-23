import React, { useEffect, useState } from 'react';
import ValidateCpf from '../../assets/utils/ValidateData/ValidateCpf';
import SecContainer from '../../components/AboutUs/OpenView';
import FormContainer from '../../components/SupportForm';
import ListNav from '../../snnipets/Footer/ListNav';
import InputContainer from '../../snnipets/SupportForm/InputContainer';
import SubmitButton from '../../snnipets/SupportForm/SubmitButton';

function NewUserAddCeiInfo() {
  const [userData, setUserData] = useState({});
  const [validCpf, setValidCpf] = useState(false);
  const [sendClick, setSendClick] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendClick((previous) => (previous + 1));

    if (!validCpf
      || !userData.password) {
      console.log('error on submit');
      return;
    }

    console.log('handleSubmit');
    console.log(userData);
  };

  useEffect(() => {
    if (userData.cpf && ValidateCpf(userData.cpf.split('.').join('').split('-').join(''))) {
      setValidCpf(true);
    } else {
      setValidCpf(false);
    }
  }, [userData]);

  return (
    <div>
      <FormContainer style={{ padding: '0' }}>
        <FormContainer.Bg style={{ height: 'initial' }}>
          <FormContainer.LeftSide>
            <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'start', color: '#8E8E8E' }}>
              Novo por aqui?
            </SecContainer.Title>
            <img src="/images/newUser/BabyLioncrop.webp" alt="Leão filhote" />
            <p>
              Opa! Parece que você ainda não vinculou seus dados do CEI na plataforma Mufasa.
            </p>

            <p>
              Preencha os campos ao lado para dar início!
            </p>

            <ul>
              <ListNav
                text="Por que pedimos esses dados?"
                href="/duvidas?pergunta=por-que-pedimos-os-dados-do-cei"
                color="#C95206"
                iconClassName="fas fa-caret-right"
                fontSize="1rem"
              />
              <ListNav
                text="Como criar sua conta no CEI?"
                href="/duvidas?pergunta=como-criar-conta-no-cei"
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
              Dados CEI
            </span>
            <InputContainer
              inputType="text"
              inputName="cpf"
              inputPlaceholder="CPF"
              userData={userData}
              setUserData={setUserData}
              dataValidate="CPF inválido"
              valid={validCpf}
              sendClick={sendClick}
            />
            <InputContainer
              inputType="password"
              inputName="password"
              inputPlaceholder="Senha"
              userData={userData}
              setUserData={setUserData}
              dataValidate="Senha é necessária"
              valid={userData.password}
              sendClick={sendClick}
              defaultSpellCheck
            />
            <SubmitButton>
              Salvar
            </SubmitButton>
          </FormContainer.Form>
        </FormContainer.Bg>
      </FormContainer>
    </div>
  );
}

export default NewUserAddCeiInfo;
