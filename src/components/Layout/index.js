import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { uiSelector } from 'state/ui';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Theme from 'assets/styles/theme';
import { LayoutWrapper, MainWrapper } from './styles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { themeMode } = useSelector(uiSelector);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
