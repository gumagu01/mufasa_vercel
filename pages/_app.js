import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import { DataProvider } from '../store/GlobalState';
import db from '../db.json';

const { theme } = db;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: all 0.4s;
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
  }
  html, body {
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    

    a{
      text-decoration: none;
      color: #000;
    }

    ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }

    small{
      font-size: .8rem;
    }

    .translate-header{
      transform: translateY(${theme.measuresPatterns.header.height.general});
      transition: all 0.4s;
    }
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>

      </DataProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

MyApp.defaultProps = {
  Component: undefined,
};

export default MyApp;
