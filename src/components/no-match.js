import React from 'react';
import { Icon } from 'semantic-ui-react';

import Layout from './layout';

const NoMatch = () => (
  <Layout>
    <Icon name='minus circle' size='big' />
    <strong>Page not found!</strong>
  </Layout>
);

export default NoMatch;
