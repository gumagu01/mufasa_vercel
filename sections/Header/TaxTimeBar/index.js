import { useRouter } from 'next/router';
import React, {
  useContext, useEffect, useLayoutEffect, useState,
} from 'react';
import SubHeaderContainer from '../../../components/Header/TaxBarTimeMonth';
import { theme } from '../../../db.json';
import SubNavItem from '../../../snnipets/Header/TaxTimeBar/MonthItem';
import { requestedMonths } from '../../../constants';
import { DataContext } from '../../../store/GlobalState';

function TaxTimeBar() {
  const [state] = useContext(DataContext);
  const { oldUser } = state;

  const months = requestedMonths.slice().reverse();
  const itemsCount = months.length;

  const router = useRouter();
  const { pathname, query } = router;

  const [showSubNav, setShowSubNav] = useState(false);
  const [translate, setTranslate] = useState('');
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    if (!oldUser) {
      setTranslate(`translateY(-${realHeight}px)`);
      setShowSubNav(false);
    } else if (pathname.indexOf('/app/imposto-de-renda') !== -1) {
      setTranslate('translateY(0)');
      setShowSubNav(true);
    } else {
      setTranslate(`translateY(-${realHeight}px)`);
      setShowSubNav(false);
    }
  }, [pathname, oldUser]);

  const itemHeight = theme.measuresPatterns.timeSelectBar.height.general;
  const itemHeightSubNav = theme.measuresPatterns.subNav.height.general;
  const realHeight = parseFloat(itemHeight.replace('px', '')) + parseFloat(itemHeightSubNav.replace('px', ''));

  const elementWidth = parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.replace('px', ''));
  const sideArrowButtonWidth = parseFloat(theme.measuresPatterns.taxTimeBar.buttonSideWidth.replace('px', ''));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLeftItems(itemsCount - Math.round((window.innerWidth - elementWidth) / elementWidth));
    }
  }, [typeof window]);

  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const leftRealItems = () => {
    const resp = [];
    if (6 * elementWidth + 2 * sideArrowButtonWidth <= size[0]
      && size[0] < 8 * elementWidth + 2 * sideArrowButtonWidth) {
      if (itemsCount <= 6) {
        resp[0] = 0;
      } else {
        resp[0] = itemsCount - 6;
      }
      resp[1] = 6;
    } else if (8 * elementWidth + 2 * sideArrowButtonWidth <= size[0]
      && size[0] < 10 * elementWidth + 2 * sideArrowButtonWidth) {
      if (itemsCount <= 8) {
        resp[0] = 0;
      } else {
        resp[0] = itemsCount - 8;
      }
      resp[1] = 8;
    } else if (10 * elementWidth + 2 * sideArrowButtonWidth <= size[0]
      && size[0] < 12 * elementWidth + 2 * sideArrowButtonWidth) {
      if (itemsCount <= 10) {
        resp[0] = 0;
      } else {
        resp[0] = itemsCount - 10;
      }
      resp[1] = 10;
    } else if (12 * elementWidth + 2 * sideArrowButtonWidth <= size[0]) {
      if (itemsCount <= 12) {
        resp[0] = 0;
      } else {
        resp[0] = itemsCount - 12;
      }
      resp[1] = 12;
    }
    return resp;
  };

  const [leftItems, setLeftItems] = useState(0);
  const [rightItems, setRightItems] = useState(0);

  useEffect(() => {
    const [absoluteLeftItems, displayedItems] = leftRealItems();
    if (!absoluteLeftItems) {
      setShowArrows(false);
    } else {
      setShowArrows(true);
    }

    if (itemsCount - leftItems - rightItems - displayedItems < 0) {
      setLeftItems(0);
      setRightItems(itemsCount - displayedItems);
    } else {
      setLeftItems(absoluteLeftItems - rightItems);
    }
  }, [leftRealItems()]);
  return (
    <SubHeaderContainer
      style={{
        pointerEvents: showSubNav ? 'initial' : 'none',
        opacity: showSubNav ? '1' : '0',
        transform: translate,
      }}
    >
      <SubHeaderContainer.ArrowContain
        disabled={!leftItems}
        className={`${!leftItems ? 'no-hover' : ''} ${showArrows ? '' : 'hide-arrow'}`}
        onClick={() => {
          if (leftItems) {
            setRightItems(rightItems + 1);
            setLeftItems(leftItems - 1);
          }
        }}
      >
        <i className="fas fa-angle-double-left" />
      </SubHeaderContainer.ArrowContain>
      <SubHeaderContainer.UlContain>
        <SubHeaderContainer.UlContain.FadeIn />
        <SubHeaderContainer.UL
          style={{
            right: `-${rightItems * elementWidth}px`,
          }}
        >
          {
        months.map((month, index) => {
          const monthId = `month__${index}`;
          const value = `R$ ${month.tax.toString().replace('.', ',')}`;
          const itemQuery = {
            periodo: month.title.replace(' ', '-').toLocaleLowerCase(),
          };
          return (
            <SubNavItem
              key={monthId}
              index={index}
              href={pathname}
              title={month.title}
              query={itemQuery}
              selectedItem={(month.title.replace(' ', '-').toLocaleLowerCase() === query.periodo)}
              value={value}
            />
          );
        })
      }
        </SubHeaderContainer.UL>
      </SubHeaderContainer.UlContain>

      <SubHeaderContainer.UlContain.FadeOut />

      <SubHeaderContainer.ArrowContain
        disabled={!rightItems}
        className={`${!rightItems ? 'no-hover' : ''} ${showArrows ? '' : 'hide-arrow'}`}
        onClick={() => {
          if (rightItems) {
            setLeftItems(leftItems + 1);
            setRightItems(rightItems - 1);
          }
        }}
      >
        <i className="fas fa-angle-double-right" />
      </SubHeaderContainer.ArrowContain>
    </SubHeaderContainer>
  );
}

export default TaxTimeBar;
