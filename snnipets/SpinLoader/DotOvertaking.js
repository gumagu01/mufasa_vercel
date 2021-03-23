import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../store/GlobalState';

const SpinContain = styled.div`
position: fixed;
top: ${({ theme }) => parseFloat(theme.measuresPatterns.header.height.general.replace('px', '')) / 2}px;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: center;
align-items: center;
filter: contrast(5);
z-index: 1000;


.dot-overtaking {
  position: relative;
  width: ${({ theme }) => theme.measuresPatterns.loaderSpin.dotOvertaking.dimension};
  height: ${({ theme }) => theme.measuresPatterns.loaderSpin.dotOvertaking.dimension};
  border-radius: 6px;
  background-color: transparent;
  color: #f77a29;
  margin: -1px 0;
  box-shadow: 0 -10px 0 0;
  animation: dotOvertaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
}

.dot-overtaking::before, .dot-overtaking::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.measuresPatterns.loaderSpin.dotOvertaking.dimension};
  height: ${({ theme }) => theme.measuresPatterns.loaderSpin.dotOvertaking.dimension};
  border-radius: 6px;
  background-color: transparent;
  color: #f77a29;
  box-shadow: 0 -10px 0 0;
}

.dot-overtaking::before {
  animation: dotOvertaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
  animation-delay: .3s;
}

.dot-overtaking::after {
  animation: dotOvertaking 1.5s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
  animation-delay: .6s;
}

@keyframes dotOvertaking {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
`;

function DotOvertaking() {
  const [state] = useContext(DataContext);
  const { spinLoader } = state;

  return (
    <>
      {
      spinLoader ? (
        <SpinContain>
          <div className="dot-overtaking" />
        </SpinContain>
      ) : (
        null
      )
    }
    </>

  );
}

export default DotOvertaking;
