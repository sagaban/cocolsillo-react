import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Container, Divider } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => (
  <Container>
    <Link to='/'>
      <Header as='h1' className={ h1 }>
        Cocolsillo
      </Header>
    </Link>
    {children}
    <Divider />
    <p className={ pullRight }>
      <b>Cocolsillo</b>&nbsp; by Santiago Bandiera ©MIT
    </p>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
