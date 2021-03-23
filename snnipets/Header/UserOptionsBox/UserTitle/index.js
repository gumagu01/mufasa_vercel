import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { DataContext } from '../../../../store/GlobalState';
import { ACTION } from '../../../../store/Actions';

function UserTitle({
  children, noBorder, href, 
}) {
  const { pathname } = useRouter();
  /*const [state, dispatch] = useContext(DataContext);
  if (onClick==handleLogout) {
    console.log('AQUIIIIIIIII');
    Cookie.remove('refreshToken', { path: '/api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: ACTION.AUTH,
      payload: {},
    });
  }*/
  return (
    <UserTitleContainer>
      <Link href={href}>
        <a className={`${noBorder ? 'no-border' : ''} 
        ${pathname === href ? 'selected' : ''}`}
        >
          {children}
        </a>
      </Link>
    </UserTitleContainer>
  );
}

const UserTitleContainer = styled.div`
display: flex;
justify-content: center;
alignt-items: center;

.selected{
  color: ${({ theme }) => theme.colors.mufasaOrange};
}

&:hover{
  .selected{
    background-color: rgb(255 99 0 / 10%);
    color: ${({ theme }) => theme.colors.mufasaOrange};
    box-shadow: none;
    transform: scale(1);
    font-weight: 500;

    i{
      color: ${({ theme }) => theme.colors.mufasaOrange};
    }
  }
}

  a{
    padding: 15px 20px;
    width: 100%;
    border-bottom: 1px solid #70707050;
    color: #707070;
    font-size: 0.9rem;
    transition: all 0.3s;

    i{
      color: ${({ theme }) => theme.colors.mufasaOrange}
    }

    &:hover{
      background: rgba(0 0 0 / 5%);
      background: #ec6915;
      box-shadow: 0 0 10px 2px #ec6915;
      transform: scale(1.05);
      color: #fff;
      font-weight: 500;

      i{
        color: #fff;
      }
    }
  }
  .no-border{
    border-bottom: none;
  }
`;

UserTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  noBorder: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

UserTitle.defaultProps = {
  noBorder: false,
};

export default UserTitle;
