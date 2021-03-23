import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SubNavItemContainer = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after{
    content: '';
    height: 85%;
    width: 2px;
    background-color: #fff;
  }

  .selected{
    font-weight: 400;

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
    border-radius: 4px;
  }
  }

  .no-selected{
    &:hover{
      /*background: ${({ theme }) => theme.colors.mufasaOrange};*/
      background: linear-gradient(120deg, rgba(227,102,20,1) 0%, rgba(239,151,96,1) 86%, rgba(220,139,86,1) 100%);
      /*box-shadow: 0 0 5px 4px rgba(0 0 0 / 15%);*/
      box-shadow: 0 0 10px 2px rgba(0 0 0 / 50%);
      box-shadow: #2b1304 0px 3px 5px;
      transform: scale(1.1);
      z-index: 5;
    }
  }

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    padding: 0 3.5vw; 
    height: calc(100% - 6px);
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    border-radius: 3px;
    position: relative;
    cursor: pointer;

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
    border-radius: 4px;
  }

  }
`;

function SubNavItem({
  href, title, selectedItem, query,
}) {
  const stringQuery = () => {
    let resp = '';
    const keys = Object.keys(query);
    for (let i = 0; i < Object.keys(query).length; i++) {
      resp += `${keys[i]}=${query[keys[i]]}`;
    }
    return resp;
  };

  return (
    <SubNavItemContainer>
      <Link href={`${href}${stringQuery() ? `?${stringQuery()}` : ''}`}>
        <a
          className={selectedItem ? 'selected' : 'no-selected'}
        >
          {title}
        </a>
      </Link>
    </SubNavItemContainer>
  );
}

SubNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SubNavItem;
