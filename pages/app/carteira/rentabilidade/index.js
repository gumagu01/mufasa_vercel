import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { theme } from '../../../../db.json';
import UnderDevelopment from '../../../../sections/UnderDevelopment';
import GraphContainer from '../../../../components/GraphContainer';

function Home() {
  const router = useRouter();
  const { pathname, query } = router;

  // push to /carteira?rentabilidade if has no query
  const initialQuery = {
    periodo: 'no-mes',
  };
  useEffect(() => {
    if (!query.periodo) {
      router.push({
        pathname: '/app/carteira/rentabilidade',
        query: initialQuery,
      });
    }
  }, [pathname, query]);

  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.timeSelectBar.height.general.replace('px', ''));

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
