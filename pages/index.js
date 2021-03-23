import React from 'react';
import styled from 'styled-components';
import AutomaticPayment from '../sections/AutomaticPayment';
import CalculatorLp from '../sections/CalculatorLp';
import DarfLp from '../sections/DarfLp';
import OnlyInMufasa from '../sections/OnlyInMufasa';
import OpenViewFormSection from '../sections/OpenViewFormSection';
import WalletLp from '../sections/WalletLp';

const LionBack = styled.div`
  background-image: url("/images/webp/lionFREE.webp");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Home() {
  return (
    <div className="translate-header">
      <LionBack>
        <OpenViewFormSection />
        <OnlyInMufasa />
      </LionBack>
      <WalletLp />
      <CalculatorLp />
      <DarfLp />
      <AutomaticPayment />
    </div>

  );
}

export default Home;
