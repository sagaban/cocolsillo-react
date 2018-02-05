import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const Layout = ({ children }) => (
  <div>
    <AppBar title='Cocolsillo' />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
