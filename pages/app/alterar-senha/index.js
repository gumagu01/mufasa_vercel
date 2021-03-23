import React, { useEffect, useState } from 'react';
import SecurityEnvironment from '../../../snnipets/SecurityEnvironment';
import InputContainer from '../../../snnipets/SupportForm/InputContainer';
import SubmitButton from '../../../snnipets/SupportForm/SubmitButton';
import
{
  Scene, Card, FormContainer,
} from '../../login';
import FormContainerComponent from '../../../components/SupportForm';

function ChangePassword() {
  const [userData, setUserData] = useState({});
  const [sendClick, setSendClick] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendClick((previous) => (previous + 1));

    if (!userData.password
      || !userData.new_password
      || !userData.confirm_new_password) {
      console.log('error on submit');
      return;
    }

    console.log('handleSubmit');
    console.log(userData);
  };

  useEffect(() => {
    setUserData({});
  }, []);

  return (
    <Scene style={{ height: '500px' }}>
      <Card>
        <FormContainer
          className="card__face card__face--front"
        >
          <FormContainerComponent.Form
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-lock" style={{ fontSize: '17px', marginRight: '10px' }} />
              Alterar senha
            </span>
            <InputContainer
              inputType="password"
              inputName="password"
              inputPlaceholder="Senha atual"
              userData={userData}
              setUserData={setUserData}
              dataValidate="Senha incorreta"
              valid={userData.password}
              sendClick={sendClick}
              defaultSpellCheck
            />
            <InputContainer
              inputType="password"
              inputName="new_password"
              inputPlaceholder="Nova senha"
              userData={userData}
              setUserData={setUserData}
              dataValidate="Senha incorreta"
              valid={userData.new_password}
              sendClick={sendClick}
              defaultSpellCheck
            />
            <InputContainer
              inputType="password"
              inputName="confirm_new_password"
              inputPlaceholder="Confirme a nova senha"
              userData={userData}
              setUserData={setUserData}
              dataValidate="Senha incorreta"
              valid={userData.confirm_new_password}
              sendClick={sendClick}
              defaultSpellCheck
            />
            <SubmitButton arrowIcon>
              Continuar
            </SubmitButton>
          </FormContainerComponent.Form>
          <SecurityEnvironment />
        </FormContainer>
      </Card>
    </Scene>
  );
}

export default ChangePassword;
