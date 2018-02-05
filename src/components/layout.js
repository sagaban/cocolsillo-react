import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => (
  <Container>
    <Link to='/'>
      <Header as='h1' className={h1}>
          webpack-for-react
      </Header>
    </Link>
    {children}
    <Divider />
    <p className={pullRight}>
        Made with <Icon name='heart' color='red' /> by Esau Silva
    </p>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
