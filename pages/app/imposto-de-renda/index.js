import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GraphContainer from '../../../components/GraphContainer';
import MonthSale from '../../../sections/MonthSale';
import NewUserAddCeiInfo from '../../../sections/NewUserAddCeiInfo';
import TaxRect from '../../../sections/TaxRectangle';
import { theme } from '../../../db.json';
import { monthSales, requestedMonths } from '../../../constants';
import { DataContext } from '../../../store/GlobalState';

function IncomeTax() {
  const data = monthSales;

  const router = useRouter();
  const { pathname, query } = router;

  const [taxHeight, setTaxHeight] = useState(0);
  const [state] = useContext(DataContext);
  const { oldUser } = state;

  useEffect(() => {
    if (!query.periodo) {
      router.push(
        `${pathname}?periodo=${requestedMonths[0].title.replace(' ', '-').toLocaleLowerCase()}#${requestedMonths[0].title.replace(' ', '-').toLocaleLowerCase()}`,
      );
    }
  }, [pathname, query]);

  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.timeSelectBar.height.general.replace('px', ''));
  return (
    <GraphContainer
      style={{
        padding: '5vh 5vw',
        justifyContent: 'space-around',
        transform: !oldUser ? `translateY(${theme.measuresPatterns.header.height.general})` : `translateY(${translate}px)`,
        alignItems: 'flex-start',
      }}
    >
      {
      oldUser ? (
        <>
          <TaxRect data={data} setTaxHeight={setTaxHeight} />
          <MonthSale sales={data.sales} maxHeight={taxHeight} />
        </>
      ) : (
        <NewUserAddCeiInfo />
      )
    }

    </GraphContainer>
  );
}

export default IncomeTax;
