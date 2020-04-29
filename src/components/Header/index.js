import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import SwitchThemeMode from './SwitchThemeMode';

import { HeaderWrapper, Title } from './styles';

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">
      <Title>{siteTitle}</Title>
    </Link>
    <MainNav />
    <SwitchThemeMode />
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
