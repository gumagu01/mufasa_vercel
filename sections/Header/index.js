import React, {
  useState, useContext,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';
import SubNavWalletOptions from './SubNavWalletOptions';
import TimeOptionBar from './TimeOptionBar';
import HeaderContainer from '../../components/Header';
import NavTitle from '../../snnipets/Header/NavTitle';
import MobileLinks from './MobileLinks';
import ButtonShowMenu from '../../snnipets/Header/ButtonShowMenu';
import FadeOut from '../../components/FadeOutHorizontal';
import TaxTimeBar from './TaxTimeBar';
import UserInfoOnHover from '../../snnipets/Header/UserInfoOnHover';
import ButtonShowProfileOptions from '../../snnipets/Header/ButtonShowProfileOptions';
import DotOvertaking from '../../snnipets/SpinLoader/DotOvertaking';

function Header() {
  const router = useRouter();
  const { pathname, query } = router;

  const [state] = useContext(DataContext);
  const { navTitles, pageTitle } = state;

  const [showMobile, setShowMobile] = useState(false);

  const handleClickToShowMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  const spinLoad = true;

  return (
    <>
      {
      spinLoad ? (
        <DotOvertaking />
      ) : (
        null
      )
    }

      <HeaderContainer>
        <HeaderContainer.Nav>
          <HeaderContainer.LogoContainer>
            <Link href={pathname.indexOf('/app/') !== -1 ? '' : '/'}>
              <a>
                <img src="/images/logo/icon.png" alt="Logo Mufasa" />
              </a>
            </Link>
          </HeaderContainer.LogoContainer>

          <HeaderContainer.NavOptions
            className="hide"
          >
            <ul>
              {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${navTitle.href}_${index}`;
              return (
                <NavTitle
                  index={index}
                  title={navTitle.title}
                  href={navTitle.href}
                  pathname={pathname}
                  key={navTitleId}
                  item={navTitle}
                  query={query}
                />
              );
            })
          }
            </ul>
          </HeaderContainer.NavOptions>

          <FadeOut />

          {
            pageTitle === 'landingPage' ? (
              <ButtonUnderlineHover
                href="/login"
                color="#c95206"
                bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
                hide
              >
                Login
                <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
              </ButtonUnderlineHover>
            ) : (
              <UserInfoOnHover />
            )
          }

          <MobileLinks
            showMobile={showMobile}
            navTitles={navTitles}
            onClick={handleClickToShowMobileMenu}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <ButtonShowMenu
              onClick={handleClickToShowMobileMenu}
              showMobile={showMobile}
            />

            {
            pageTitle === 'afterLogin' ? (
              <ButtonShowProfileOptions />
            ) : (
              null
            )
          }
          </div>

        </HeaderContainer.Nav>
      </HeaderContainer>
      <SubNavWalletOptions />
      <TimeOptionBar />
      <TaxTimeBar />
    </>
  );
}

export default Header;
