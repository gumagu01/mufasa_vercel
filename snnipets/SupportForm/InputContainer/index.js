import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import cpfMask from '../../../assets/utils/InputDataMask/cpfMask';
import { DataContext } from '../../../store/GlobalState';

const InputContain = styled.div`
position: relative;
width: 100%;
z-index: 1;
margin-bottom: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position:relative;
}

div.alert-validate{

  @media (max-width: 767px){
    input, textarea{
      border: 1px solid #c80000 !important;
    }
  }

  @media (max-width: 992px){
    &:before {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }

  &:hover{
    input, textarea{
      border: 2px solid #c80000 !important;
    }
  }

  &:hover:before {
    visibility: visible;
    opacity: 1;
  }

  &:before{
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:after{
    content: "\f06a";
    font-family: 'Font Awesome 5 Free';
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    font-weight: 600;
  }
}

textarea.beautyInput{
  min-height: 150px;
  border-radius: 32px;
  padding: 12px 30px;
}

.beautyInput{
  display: block;
  width: 100%;
  background: #e6e6e6;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px;
  outline: none;
  border: none;
  font-weight: 700;
  transition: all 0.2s;
  border: 2px solid #e6e6e6;

  &:hover {
    border: 2px solid #ec8d50;
  }
  &:focus{
    box-shadow: 0 0 4px 2px rgb(236 141 80 / 80%);
    border: 2px solid #ec8d50 !important;
  }
  
}
`;

function InputContainer({
  inputType,
  inputName,
  inputPlaceholder,
  userData,
  setUserData,
  dataValidate,
  valid,
  sendClick,
  defaultSpellCheck,
}) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (inputName === 'cpf') {
      setInputValue(cpfMask(value));
    } else {
      setInputValue(value);
    }
    setUserData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (sendClick > 0) {
      setFocus(false);
    }
  }, [sendClick]);

  const [state] = useContext(DataContext);
  const { oldUser, pageTitle } = state;

  useEffect(() => {
    if (!oldUser || pageTitle === 'landingPage') return;
    if (inputName === 'cpf') {
      setInputValue(cpfMask('14461876756'));
      setUserData((previous) => ({
        ...previous,
        [inputName]: cpfMask('14461876756'),
      }));
    } else if (inputName.indexOf('password') !== -1) {
      setInputValue('senha_teste');
      setUserData((previous) => ({
        ...previous,
        [inputName]: 'senha_teste',
      }));
    } else if (inputName !== 'subject' && inputName !== 'message') {
      setInputValue('db_data');
      setUserData((previous) => ({
        ...previous,
        [inputName]: 'db_data',
      }));
    }
  }, [oldUser]);

  const [focus, setFocus] = useState(true);
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <InputContain
      style={{
        justifyContent: inputType === 'password' ? 'flex-start' : null,
      }}
    >
      <div
        data-validate={dataValidate}
        className={!valid && !focus ? 'alert-validate' : ''}
        style={{
          width: inputType === 'password' ? '85%' : '100%',
        }}
      >
        {
        inputType
          ? (
            <input
              className="beautyInput"
              type={inputType === 'password' ? (viewPassword ? 'text' : 'password') : inputType}
              name={inputName}
              placeholder={inputPlaceholder}
              onChange={handleInputChange}
              onFocus={() => setFocus(true)}
              value={inputValue}
              spellCheck={defaultSpellCheck === undefined}
            />
          ) : (
            <textarea
              className="beautyInput"
              name={inputName}
              placeholder={inputPlaceholder}
              style={{ marginTop: '0px', marginBottom: '0px', height: '150px' }}
              onChange={handleInputChange}
              onFocus={() => setFocus(true)}
            />
          )
      }
      </div>

      {
        inputType === 'password' ? (
          <InputContain.PasswordIconContain
            onClick={() => {
              setViewPassword(!viewPassword);
            }}
          >
            <i
              className="far fa-eye-slash"
              style={{
                opacity: viewPassword ? '0' : '1',
                pointerEvents: viewPassword ? 'none' : 'initial',
              }}
            />
            <i
              className="far fa-eye"
              style={{
                opacity: viewPassword ? '1' : '0',
                pointerEvents: viewPassword ? 'initial' : 'none',
              }}
            />
          </InputContain.PasswordIconContain>
        ) : (
          null
        )
      }
    </InputContain>
  );
}

InputContain.PasswordIconContain = styled.div`

cursor: pointer;
width: 15%;
position: absolute;
right: 0;
height: 50px;

  i{
    color: #666666;
    font-size: 25px;
    position: absolute;
    left: 50%;
    cursor: pointer;
    transform: translateX(-50%);
    transition: all 0.2s;
    padding: 9px;
    border-radius: 6px;

    &:hover{
      background-color: rgb(255 99 0 / 10%);
    }
  }
`;

export default InputContainer;
