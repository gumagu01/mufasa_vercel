import React from 'react';
import styled from 'styled-components';

function SmoothFocusBack({ className, show, onClick }) {
  return (
    <SmoothFocusOnElement
      className={className}
      style={{ pointerEvents: show ? 'initial' : 'none' }}
      onClick={onClick}
    />
  );
}

const SmoothFocusOnElement = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  z-index: 100;
  transition: all 0.2s;
`;

export default SmoothFocusBack;
