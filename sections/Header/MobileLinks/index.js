import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeaderContainer from '../../../components/Header';
import ButtonUnderlineHover from '../../../snnipets/ButtonUnderlineHover';

function MobileLinks({
  showMobile, navTitles, onClick,
}) {
  const styleMobile = showMobile ? 'translateY(0)' : 'translateY(-100vh)';
  const router = useRouter();
  const { query, pathname } = router;

  const selected = (navTitleData) => {
    let resp = false;
    if (pathname === navTitleData.href
      && Object.keys(navTitleData.query).length === Object.keys(query).length) {
      resp = true;
    } else if (pathname.indexOf('/carteira') !== -1 && navTitleData.href.indexOf('/carteira') !== -1) {
      resp = true;
    } else if (pathname.indexOf('/imposto-de-renda') !== -1 && navTitleData.href.indexOf('/imposto-de-renda') !== -1) {
      resp = true;
    }

    return resp;
  };

  return (
    <HeaderContainer.ContainerMobileLinks
      style={{
        transform: styleMobile,
      }}
    >
      <HeaderContainer.NavOptions>
        <ul style={{ display: 'inherit' }}>
          {
            navTitles.map((navTitle, index) => {
              const navTitleId = `navTitle__${navTitle.href}_${index}`;
              return (
                <li
                  key={navTitleId}
                  style={{ marginBottom: '8px' }}
                >
                  <Link href={`${navTitle.href}${navTitle.query.scroll === '' ? '?scroll' : ''}${navTitle.scroll || ''}`}>
                    <a
                      className={selected(navTitle) ? 'selected-nav-a' : ''}
                      onClick={onClick}
                    >
                      {navTitle.title}
                    </a>
                  </Link>
                </li>
              );
            })
          }
        </ul>
        {
          pathname.indexOf('/app/') !== -1 ? (
            null
          ) : (
            <ButtonUnderlineHover
              href="/login"
              color="#c95206"
              bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
              otherStyles={{ marginLeft: '0' }}
              onClick={onClick}
            >
              Login
              <i className="fas fa-sign-in-alt" style={{ marginLeft: '10px' }} />
            </ButtonUnderlineHover>
          )
        }
      </HeaderContainer.NavOptions>
    </HeaderContainer.ContainerMobileLinks>
  );
}

MobileLinks.propTypes = {
  showMobile: PropTypes.bool.isRequired,
  navTitles: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func,
};

MobileLinks.defaultProps = {
  onClick: () => {},
};

export default MobileLinks;
