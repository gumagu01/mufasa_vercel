import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavTitle({
  title, href, pathname, onClick, item, query,
}) {
  const destUrl = `${href}${(item.query.scroll === '') ? '?scroll' : ''}${item.scroll || ''}`;
  const selected = () => {
    let resp = false;

    if (pathname === href
      && Object.keys(item.query).length === Object.keys(query).length) {
      resp = true;
    } else if (pathname.indexOf('/carteira') !== -1 && href.indexOf('/carteira') !== -1) {
      resp = true;
    } else if (pathname.indexOf('/imposto-de-renda') !== -1 && href.indexOf('/imposto-de-renda') !== -1) {
      resp = true;
    }

    return resp;
  };

  return (
    <LI
      className={`${selected() ? 'selected-nav-li' : ''}`}
    >
      <Link href={destUrl}>
        <a
          className={`${selected() ? 'selected-nav-a' : ''}`}
          onClick={onClick}
        >
          {title}
        </a>
      </Link>
    </LI>
  );
}

const LI = styled.li`
position: relative;

  @media (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
  }  


  a{
    text-decoration: none;
    color: #313131;

    @media (min-width: 768px){
      padding: 0px 20px;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
    }   

    &:before{
      opacity: 0;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: ${({ theme }) => theme.colors.mufasaOrange};
      pointer-events: none;
      transition: all 0.4s;
    }
  }

  .selected-nav-a{
    color: ${({ theme }) => theme.colors.mufasaOrange};

    &:before{
      opacity: 1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: ${({ theme }) => theme.colors.mufasaOrange};
      pointer-events: none;
      transition: all 0.4s;
    }
  }

  a.selected-nav-a:hover{
    color: #c95206;
  }

  a:hover{
    color: #fda46b;
  }
`;

NavTitle.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  item: PropTypes.oneOfType([PropTypes.any]).isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
};

NavTitle.defaultProps = {
  onClick: () => {},
};

export default NavTitle;
