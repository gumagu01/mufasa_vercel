import React from 'react';
import styled from 'styled-components';
import AccountData from '../../../sections/AccountData';

function Account() {
  return (
    <AccContain className="translate-header">
      <AccountData />
    </AccContain>
  );
}

const AccContain = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});
  background: linear-gradient(180deg, rgba(201,82,6,1) 0%, rgba(0,37,85,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Account;
