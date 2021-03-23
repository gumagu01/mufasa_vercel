import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SubNavItemContainer = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.selected{
  font-weight: 700;

  h5{
    font-weight: 700;
  }

  &:before{
    content: '';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #fff;
    opacity: .25;
    z-index: -1;
    transition: all 0.4s;
  }
}

.no-selected{
  &:hover{
    /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
    background: ${({ theme }) => theme.measuresPatterns.subNav.background};
    /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
    box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
    box-shadow: #2b1304 0px 3px 5px;
    transform: scale(1.1);
    z-index: 2;
  }
}

a{
  text-decoration: none;
  color: white;
  font-weight: 400;
  height: 100%;
  margin: 0;
  position: relative;
  cursor: pointer;
  min-width: ${({ theme }) => theme.measuresPatterns.taxTimeBar.elementWidth.general};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  width: 100%;

  &:before{
    content: '';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #fff;
    opacity: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  ${'' /* @media(min-width: ${({ theme }) => parseFloat(theme.measuresPatterns.taxTimeBar.elementWidth.general.toString().replace('px', '')) * 9}px){
    min-width: ${({ theme }) => theme.measuresPatterns.taxTimeBar.elementWidth.general};
  } */}

  &:hover{
    color: white;
  }
  
}
`;

function SubNavItem({
  href, title, selectedItem, query, value,
}) {
  const destUrl = () => {
    let resp = '';
    const keys = Object.keys(query);
    for (let i = 0; i < Object.keys(query).length; i++) {
      resp += `${keys[i]}=${query[keys[i]]}`;
    }
    resp = `${href}${resp ? `?${resp}` : ''}`;
    resp = `${resp}${`#${query.periodo}`}`;
    return resp;
  };
  return (
    <SubNavItemContainer id={query.periodo}>
      <Link href={destUrl()}>
        <a
          className={selectedItem ? 'selected' : 'no-selected'}
        >
          <h5>
            {title}
          </h5>
          <small>
            {value}
          </small>
        </a>

      </Link>
    </SubNavItemContainer>
  );
}

SubNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SubNavItem;
