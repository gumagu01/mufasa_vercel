import React from 'react';
import styled from 'styled-components';

function Checkbox({ children, onChange, style }) {
  return (
    <CheckboxContain style={style}>
      <input type="checkbox" id="checkbox" onChange={onChange} />
      <label htmlFor="checkbox">
        <small>{children}</small>
      </label>
    </CheckboxContain>
  );
}

const CheckboxContain = styled.div`
  width: 100%;
  position: relative;
  display: block;
margin-bottom: 20px;
margin-left: 15px;
input[type="checkbox"] {
  width: auto;
  opacity: 0.00000001;
  position: absolute;
  left: 0;
  margin-left: -20px;
}
label {
  position: relative;
}
label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 15px;
  height: 15px;
  transition: transform 0.28s ease;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.mufasaOrange};
  cursor: pointer;
  transform: translateY(-50%);
}
label:after {
content: '\f00c';
font-family: 'Font Awesome\ 5 Free'; 
  font-weight: 900;
cursor: pointer;
  display: block;
  color: ${({ theme }) => theme.colors.mufasaOrange};
  transform: scale(0) translateY(-50%);
  transition: transform ease 0.25s;
  will-change: transform;
  position: absolute;
  font-size: .55rem;
  top: 50%;
  left: 3px;
}
input[type="checkbox"]:checked ~ label::before {
  color: ${({ theme }) => theme.colors.mufasaOrange};
}

input[type="checkbox"]:checked ~ label::after {
  transform: scale(1) translateY(-50%);
  top: 50%;
  left: 3px;
}

label {
  min-height: 20px;
  display: block;
  padding-left: 25px;
  margin-bottom: 0;
  font-weight: normal;
  text-align: left;
  cursor: pointer;
}
label small {
  
}
input[type="checkbox"]:focus + label::before {
  outline: 0;
}
`;

export default Checkbox;
