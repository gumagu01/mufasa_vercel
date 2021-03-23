import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px; 
    clear: both;
    display: block;
    letter-spacing: -1px;
    padding: 0 5px;
    height: 75px;
    margin-bottom: 30px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.12);     
    width: 100%;
    z-index: 60;
    transform: translateZ(0);
    margin-top: 10px;

    box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
`;

function BendHeader() {
  return (
    <Header>
      Bend Header
    </Header>
  );
}

export default BendHeader;
