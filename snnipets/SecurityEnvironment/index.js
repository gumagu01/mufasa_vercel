import React from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`

  color: #CDD1DC;
  display:inline-flex;
  font-size:12px;
  align-items: center;
  margin-top: 25px;
  font-weight: bold;
  justify-content: center;

  .security-icon{
    margin-right: 7px;
  }
    
`;

function SecurityEnvironment({ style }) {
  return (
    <SecurityContainer style={style}>
      <div className="security-icon">
        <img src="/images/security_icons/lp_world_security.svg" alt="Ambiente seguro" />
      </div>
      <div className="security-text">
        Ambiente seguro
      </div>
    </SecurityContainer>
  );
}

export default SecurityEnvironment;
