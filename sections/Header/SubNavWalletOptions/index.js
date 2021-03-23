import React from 'react';
import { useRouter } from 'next/router';
import { subNavOptions } from '../../../constants';
import SubHeaderContainer from '../../../components/Header/SubHeaderContainer';
import SubNavItem from '../../../snnipets/Header/SubNavWalletOptions';
import { theme } from '../../../db.json';

function SubNavWalletOptions() {
  const router = useRouter();
  const { pathname } = router;

  const showSubNav = (pathname.indexOf('/app/carteira') !== -1);

  const itemHeight = theme.measuresPatterns.subNav.height.general;
  const translateTimeNav = () => {
    let resp;
    if (pathname.indexOf('/app/carteira') !== -1) {
      resp = 'translateY(0)';
    } else {
      resp = `translateY(-${itemHeight})`;
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
            const subNavId = `subNavOption__${index}`;
            return (
              <SubNavItem
                index={index}
                key={subNavId}
                href={subNavOption.href}
                title={subNavOption.title}
                query={subNavOption.query}
                selectedItem={(subNavOption.href === pathname)}
              />
            );
          })
        }
      </ul>
    </SubHeaderContainer>
  );
}

export default SubNavWalletOptions;
