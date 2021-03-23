import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../sections/Header';
import Notify from '../sections/Short/Notify';
import Modal from '../snnipets/Modal';
import Footer from '../sections/Footer';
import db from '../db.json';
import { DataContext } from '../store/GlobalState';

const { theme } = db;

const SiteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  will-change: transform;
  text-align: center;
  transition: all 0.4s;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  & > div {
    flex: 1;
    align-self: flex-start;
  }
`;

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  const [state] = useContext(DataContext);
  const { pageTitle } = state;

  const showHeader = (pathname.indexOf('/denied-access') !== -1 || (pathname !== '/login' && pathname.indexOf('/alterar-senha') === -1));
  const showFooter = (pageTitle === 'landingPage' && pathname !== '/login' && pathname !== '/alterar-senha');

  return (
    <SiteContainer
      style={{
        background: (pathname === '/login' || pathname.indexOf('/alterar-senha') !== -1) ? 'linear-gradient(120deg, rgb(228, 101, 18) 0%, rgb(201, 82, 6) 52%, rgb(187, 76, 4) 100%)' : theme.colors.lightGrayBg,
      }}
    >

      {
        // exclude header from page denied-access ========================
        showHeader
          ? (
            <Header />
          ) : (
            ''
          )
      }

      {
        // notify only in bend ========================
        (pathname.indexOf('bend-admin') !== -1)
          ? (
            <Notify />
          ) : (
            ''
          )
      }

      <Modal />

      <Main>
        {children}
      </Main>
      {
        showFooter
          ? (
            <Footer />
          ) : (
            ''
          )
      }
    </SiteContainer>
  );
}

export default Layout;
