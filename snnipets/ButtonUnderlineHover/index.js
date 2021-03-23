import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const DeskLoginButon = styled.div`
  flex-grow: 0;
  margin-left: 16px;
  margin-right: 16px;
  display: inline-block;

  .hide{
    display: none;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    /*color: #c95206;*/
    transition: background-size 0.2s ease-in-out 0s;
    /*background-image: linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%);*/
    background-repeat: no-repeat;
    background-position: 0px 100%, 100% 100%;
    background-size: 0 8%;

    &:hover{
      background-size: 100% 8%;
    }
  }
`;

function ButtonUnderlineHover({
  children, href, color, bg, otherStyles, hide, onClick,
}) {
  return (
    <DeskLoginButon
      style={
      otherStyles
    }
      className={hide ? 'hide' : ''}
    >
      <Link href={href}>
        <a
          style={{
            color,
            backgroundImage: bg,
          }}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    </DeskLoginButon>
  );
}

ButtonUnderlineHover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
  otherStyles: PropTypes.objectOf(PropTypes.any),
  hide: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonUnderlineHover.defaultProps = {
  color: undefined,
  bg: undefined,
  otherStyles: undefined,
  hide: undefined,
  onClick: () => {},
};

export default ButtonUnderlineHover;
