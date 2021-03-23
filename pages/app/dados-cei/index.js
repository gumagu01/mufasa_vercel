import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../../store/GlobalState';
import validCpfAuth from '../../../assets/utils/ValidateData/ValidCpf';
import { getData, patchData } from '../../../assets/utils/fetchData';
import OldUserCeiInfo from '../../../sections/OldUserCeiInfo';
import NewUserAddCeiInfo from '../../../sections/NewUserAddCeiInfo';
import GraphContainer from '../../../components/GraphContainer';
import { theme } from '../../../db.json';

const CEI = styled.div`

`;

CEI.Header = styled.h1`

`;

CEI.Form = styled.form`

`;

function insertCEIinfo() {
  const [state, dispatch] = useContext(DataContext);
  const { auth, oldUser } = state;
  const [initialLoading, setInitialLoading] = useState(true);

  const id = auth.user && auth.user._id;

  const [submitData, setSubmitData] = useState({
    cpf: '',
    password: '',
    // user_id: '',
  });

  const [dbData, setDbData] = useState({
    cpf: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({
      ...submitData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validData = await validCpfAuth(submitData.cpf, submitData.password);

    if (!validData.validate) {
      setSubmitData({
        ...submitData,
        cpfErr: validData.cpfMsg,
        passwordMsg: validData.passwordMsg,
      });
      console.log(validData);
      return;
    }

    setSubmitData({
      ...submitData,
      cpfErr: '',
      passwordMsg: '',
    });

    const CEIdata = {
      CPF: submitData.cpf.split('.').join('').split('-').join(''),
      CEIpassword: submitData.password,
      // _id: submitData.user_id,
    };

    const { CPF, CEIpassword } = CEIdata;

    dispatch({ type: 'START_LOADING' });

    await patchData('api/user', { CPF, CEIpassword }, auth.token)
      .then((res) => {
        if (res.err) {
          console.log(res.err);
          return;
        }

        setDbData({
          cpf: res.user.CPF,
          password: res.user.CEIpassword,
        });

        console.log(res);
      });

    dispatch({ type: 'END_LOADING' });
  };

  useEffect(async () => {
    if (!id || !auth.token) return;

    const res = await getData(`api/user/${id}`, auth.token);

    if (res.err) {
      console.log(res.err);
      return;
    }

    setDbData({
      cpf: res.data.CPF,
      password: res.data.CEIpassword,
    });

    setInitialLoading(false);
  }, [id, auth]);

  return (
    <GraphContainer
      style={{
        flexWrap: 'wrap',
        flexDirection: 'initial',
        padding: '5vh 10vw',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      }}
      className="translate-header"
    >
      {
      oldUser ? (
        <OldUserCeiInfo />
      ) : (
        <NewUserAddCeiInfo />
      )
    }
    </GraphContainer>
  );
}

export default insertCEIinfo;
