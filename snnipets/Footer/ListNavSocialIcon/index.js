import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListNavItemSocialMedia = styled.li`
  margin-top: 15px;

  a{
    display: inline-block;
    background-color: #5f5e5e;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    transition: all 0.1s linear;
    top: 0;
    position: relative;
    margin-right: 10px;
  }  

  a:hover{
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.mufasaOrange};
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.mufasaOrange};
    top: -6px;
    transform: scale(1.15);
  }

  i{
    font-size: 20px;
    color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
`;

function ListNavSocialIcon({ href, socialMedia }) {
  let classIcon;
  if (socialMedia === 'face') {
    classIcon = 'fab fa-facebook-f';
  } else if (socialMedia === 'insta') {
    classIcon = 'fab fa-instagram';
  } else if (socialMedia === 'youtube') {
    classIcon = 'fab fa-youtube';
  } else if (socialMedia === 'twitter') {
    classIcon = 'fab fa-twitter';
  }
  return (
    <ListNavItemSocialMedia>
      <Link href={href}>
        <a>
          <i className={classIcon} />
        </a>
      </Link>
    </ListNavItemSocialMedia>
  );
}

ListNavSocialIcon.propTypes = {
  href: PropTypes.string,
  socialMedia: PropTypes.string.isRequired,
};

ListNavSocialIcon.defaultProps = {
  href: '',
};

export default ListNavSocialIcon;
