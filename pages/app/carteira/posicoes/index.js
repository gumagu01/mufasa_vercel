import React from 'react';
import GraphContainer from '../../../../components/GraphContainer';
import { theme } from '../../../../db.json';
import UnderDevelopment from '../../../../sections/UnderDevelopment';

function Home() {
  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''));

  return (
    <GraphContainer
      style={{
        flexWrap: 'wrap',
        flexDirection: 'initial',
        padding: '5vh 10vw',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        transform: `translateY(${translate}px)`,
      }}
    >
      <UnderDevelopment />
    </GraphContainer>
  );
}

export default Home;
