import React, { useContext } from 'react';
import Loading from '../../snnipets/Loading';
import { DataContext } from '../../store/GlobalState';
import SecurityEnvironment from '../../snnipets/SecurityEnvironment';
import FormLogin from '../FormLogin';
import GoogleLog from '../../snnipets/Googlelogin';
import Facebooke from '../../snnipets/facebooklogin';
import OpenView from '../../components/OpenViewLp';

function OpenViewFormSection() {
  const [state] = useContext(DataContext);
  const { loading } = state;

  return (
    <OpenView>
      <OpenView.SideText>
        <h3>
          #SOUMUFASA
        </h3>
        <p>
          Tenha acesso ao cálculo automático de seu Imposto de Renda na Bolsa e à geração e
          emissão da DARF.
        </p>
        <p>
          Investir nunca foi tão fácil!
        </p>
      </OpenView.SideText>
      <OpenView.FormContainer>
        <h4>
          Comece a calcular
        </h4>
        <h6>
          É online, rápido e 100% grátis
        </h6>
        <FormLogin
          isRegister
        >
          <OpenView.SubmitButton type="submit">
            {
                      loading
                        ? (
                          <>
                            <Loading />
                          </>
                        ) : (
                          'Quero começar'
                        )
                  }
          </OpenView.SubmitButton>
          <p style={{ color: '#707070', margin: '17px 0 0 0' }}>OU</p>
          <GoogleLog />
          <Facebooke />
        </FormLogin>
        <SecurityEnvironment />
      </OpenView.FormContainer>
    </OpenView>
  );
}

export default OpenViewFormSection;
