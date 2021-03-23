import React from 'react';
import { useRouter } from 'next/router';
import { timeOptionsNavBar } from '../../../constants';
import SubHeaderContainer from '../../../components/Header/SubHeaderTimeOptionsContainer';
import SubNavItem from '../../../snnipets/Header/TimeOptionBar';
import { theme } from '../../../db.json';

function TimeOptionBar() {
  const router = useRouter();
  const { pathname, query } = router;

  const subNavOptions = timeOptionsNavBar;

  const showSubNav = (pathname.indexOf('/app/carteira') !== -1);

  const itemHeight = theme.measuresPatterns.timeSelectBar.height.general;
  const itemHeightSubNav = theme.measuresPatterns.subNav.height.general;
  const translateTimeNav = () => {
    let resp;
    if (pathname.indexOf('/app/carteira/rentabilidade') !== -1) {
      resp = 'translateY(0)';
    } else if (pathname.indexOf('/app/carteira/posicoes') !== -1) {
      resp = `translateY(-${itemHeight})`;
    } else {
      const totalHeight = parseFloat(itemHeight.replace('px', '')) + parseFloat(itemHeightSubNav.replace('px', ''));
      resp = `translateY(-${totalHeight}px)`;
    }
    return resp;
  };

  return (
    <SubHeaderContainer
      style={{
        pointerEvents: showSubNav ? 'initial' : 'none',
        opacity: showSubNav ? '1' : '0',
        transform: translateTimeNav(),
      }}
    >
      <ul>
        {
          subNavOptions.map((subNavOption, index) => {
            const subNavId = `timeOptionBar__${index}`;
            return (
              <SubNavItem
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                selectedItem={(subNavOption.query.periodo === query.periodo)}
                query={subNavOption.query}
              />
            );
          })
        }
      </ul>
    </SubHeaderContainer>
  );
}

export default TimeOptionBar;
